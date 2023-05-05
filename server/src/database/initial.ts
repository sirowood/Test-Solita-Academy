import { parse } from 'csv-parse';
import needle from 'needle';
import { Journey, Station } from './models';
import { StationFields, FullStation } from '../types/station.type';
import { JourneyFields, NewJourney } from '../types/journey.type';

const allStationsId: number[] = [];
const rowCap = 10000;

async function importStations() {
  const rows: FullStation[] = [];

  function validStation(newEntry: StationFields) {
    return Math.abs(Number(newEntry.x)) <= 90 && Math.abs(Number(newEntry.y)) <= 180;
  }

  const parser = needle
    .get('https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv', { follow_max: 1, compressed: true })
    .pipe(parse({
      trim: true,
      delimiter: ',',
      skip_empty_lines: true,
      columns: [
        'fid',
        'id',
        'nimi',
        'namn',
        'name',
        'osoite',
        'adress',
        'kaupunki',
        'stad',
        'operaattor',
        'kapasiteet',
        'x',
        'y',
      ],
      from_line: 2,
    }));

  for await (const row of parser) {
    if (validStation(row as StationFields)) {
      rows.push(row as FullStation);
      allStationsId.push(+(row as FullStation).id);
    }

    if (rows.length === rowCap) {
      await Station.bulkCreate(rows, { ignoreDuplicates: true });
      rows.length = 0;
    }
  }

  if (rows.length > 0) {
    await Station.bulkCreate(rows, { ignoreDuplicates: true });
    rows.length = 0;
  }
}

async function importJourneys(url: string) {
  const rows: NewJourney[] = [];

  function validJourney(newEntry: JourneyFields) {
    return allStationsId.includes(Number(newEntry.arrivalStationId))
      && allStationsId.includes(Number(newEntry.departureStationId))
      && Date.parse(newEntry.arrivalTime as string) > Date.parse(newEntry.departureTime as string)
      && Number(newEntry.coveredDistance) >= 10
      && Number(newEntry.duration) >= 10;
  }

  const parser = needle
    .get(url, { follow_max: 1, compressed: true })
    .pipe(parse({
      trim: true,
      delimiter: ',',
      skip_empty_lines: true,
      columns: [
        'departureTime',
        'arrivalTime',
        'departureStationId',
        'departureStationName',
        'arrivalStationId',
        'arrivalStationName',
        'coveredDistance',
        'duration',
      ],
      from_line: 2,
    }));

  let count = 0;

  for await (const row of parser) {
    if (validJourney(row as JourneyFields)) {
      rows.push(row as NewJourney);
    }

    if (rows.length === rowCap) {
      const insertStartTime = new Date().getTime();
      console.info(`Inserting ${count * rowCap + 1} - ${(count + 1) * rowCap}`);

      await Journey.bulkCreate(rows, { ignoreDuplicates: true });

      const insertEndTime = new Date().getTime();
      console.info(`Time: ${(insertEndTime - insertStartTime) / 1000} s`);

      rows.length = 0;
      count++;
    }
  }

  if (rows.length > 0) {
    await Journey.bulkCreate(rows, { ignoreDuplicates: true });
    rows.length = 0;
  }
}

async function startImport() {
  console.info('Start to import Stations data...');
  await importStations();
  console.log('Stations import done!');

  console.info('Start to import Journeys data ... 1/3');
  await importJourneys('https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv');
  console.log('Journeys 1/3 done!');

  console.info('Start to import Journeys data ... 2/3');
  await importJourneys('https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv');
  console.log('Journeys 2/3 done!');

  console.info('Start to import Journeys data ... 3/3');
  await importJourneys('https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv');
  console.log('Journeys 3/3 done!');
}

export default startImport;
