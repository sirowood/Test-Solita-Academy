import { finished } from 'stream/promises';
import needle from 'needle';
import { parse } from 'csv-parse';
import { info } from '../utils/logger';
import { Station, Journey } from './models/';
import { StationFields, NewStation, FullStation } from '../types/station.type';
import { JourneyFields, NewJourney } from '../types/journey.type';
import { stationData, journeyData } from './initial.data';

type InitialData = {
  dataGroup: string,
  urls: string[],
  headers: string[],
};

function newParser(url: string, headers: string[]) {
  const parser = needle
    .get(url, { follow_max: 1, compressed: true })
    .pipe(parse({
      trim: true,
      delimiter: ',',
      skip_empty_lines: true,
      columns: headers,
      from_line: 2,
    }));

  return parser;
}

function validJourney(newEntry: JourneyFields) {
  return allStationsId.includes(Number(newEntry.arrivalStationId))
    && allStationsId.includes(Number(newEntry.departureStationId))
    && Date.parse(newEntry.arrivalTime as string) > Date.parse(newEntry.departureTime as string)
    && Number(newEntry.coveredDistance) >= 10
    && Number(newEntry.duration) >= 10;
}

function validStation(newEntry: StationFields) {
  return Math.abs(Number(newEntry.x)) <= 90 && Math.abs(Number(newEntry.y)) <= 180;
}

const allStationsId: number[] = [];

async function startInitialization(initialData: InitialData): Promise<void> {
  const {
    dataGroup,
    urls,
    headers,
  } = initialData;

  const entriesToImport: unknown[] = [];

  function writeEntriesToDatabase() {
    if (dataGroup === 'stations') {
      void Station.bulkCreate(entriesToImport as NewStation[], { ignoreDuplicates: true });
    } else {
      void Journey.bulkCreate(entriesToImport as NewJourney[], { ignoreDuplicates: true });
    }
    entriesToImport.length = 0;
  }

  function processNewEntry(newEntry: unknown) {
    if (dataGroup === 'stations') {
      if (!validStation(newEntry as StationFields)) {
        return;
      }

      entriesToImport.push(newEntry as NewStation);
      allStationsId.push(+(newEntry as FullStation).id);
    } else {
      if (!validJourney(newEntry as JourneyFields)) {
        return;
      }
      if (entriesToImport.length === 10000) {
        writeEntriesToDatabase();
      }

      entriesToImport.push(newEntry as NewJourney);
    }
  }

  function handleStreamEnd() {
    if (entriesToImport.length > 0) {
      writeEntriesToDatabase();
    }
  }

  for (const [index, url] of urls.entries()) {
    info(`Importing ${dataGroup} - ${index + 1}/${urls.length}`);

    const parser = newParser(url, headers);

    parser.on('data', (newEntry: unknown) => processNewEntry(newEntry));
    parser.on('end', handleStreamEnd);
    await finished(parser);
  }
}

async function initializeData() {
  await startInitialization(stationData);
  await startInitialization(journeyData);
  await Station.updateStationTableSequence();
}

export default initializeData;