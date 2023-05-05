import { parse } from 'csv-parse';
import needle from 'needle';
import { info } from '../utils/logger';
import { Journey, Station } from './models';
import { stationData, journeyData } from './initial.data';
import { StationFields, FullStation } from '../types/station.type';
import { JourneyFields, NewJourney } from '../types/journey.type';

const allStationsId: number[] = [];
const rowCap = 10000;

function newParser(url: string, columns: string[]) {
  const parser = needle
    .get(url, { follow_max: 1, compressed: true })
    .pipe(parse({
      from_line: 2,
      trim: true,
      delimiter: ',',
      skip_empty_lines: true,
      columns,
    }));

  return parser;
}

function validStation(newEntry: StationFields) {
  return Math.abs(Number(newEntry.x)) <= 90 && Math.abs(Number(newEntry.y)) <= 180;
}

function validJourney(newEntry: JourneyFields) {
  return allStationsId.includes(Number(newEntry.arrivalStationId))
    && allStationsId.includes(Number(newEntry.departureStationId))
    && Date.parse(newEntry.arrivalTime as string) > Date.parse(newEntry.departureTime as string)
    && Number(newEntry.coveredDistance) >= 10
    && Number(newEntry.duration) >= 10;
}

async function importStations() {
  const rows: FullStation[] | NewJourney = [];

  const parser = newParser(stationData.url, stationData.columns);

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

async function importJourneys(url: string, columns: string[]) {
  const rows: NewJourney[] = [];

  const parser = newParser(url, columns);

  let count = 0;

  for await (const row of parser) {
    if (validJourney(row as JourneyFields)) {
      rows.push(row as NewJourney);
    }

    if (rows.length === rowCap) {
      info(`Inserting ${count * rowCap + 1} - ${(count + 1) * rowCap}`);
      await Journey.bulkCreate(rows, { ignoreDuplicates: true });
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
  info('Start to import Stations data...');
  await importStations();
  info('Stations import done!');

  info('Start to import Journeys data...');
  for await (const url of journeyData.urls) {
    await importJourneys(url, journeyData.columns);
  }
  info('Journeys import done!');
}

export default startImport;
