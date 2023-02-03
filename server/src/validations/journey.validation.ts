import { isDate, isString, isNumber, throwMissingError, throwInvalidError } from './helper.validation';
import { JourneyFields, NewJourney } from '../types/journey.type';

const parseDate = (date: unknown, target: string): string => {
  if (!date) {
    throwMissingError(target);
  }
  if (!isString(date) || !isDate(date)) {
    throwInvalidError(`Unable to convert ${target}: '${date}' to Date`);
  }
  return date as string;
};

const isValidDate = (arrivalTime: unknown, departureTime: unknown) => {
  return Date.parse(arrivalTime as string) - Date.parse(departureTime as string) > 0;
};

const parseStationId = (id: unknown, target: string): number => {
  if (!id) {
    throwMissingError(target);
  }
  if (!isNumber(id)) {
    throwInvalidError(`Unable to convert ${target}: '${id}' to number`);
  }
  if (Number(id) <= 0) {
    throwInvalidError(`${target}: ${id} is <= 0`);
  }
  return Number(id);
};

const parseValidNumber = (param: unknown, target: string): number => {
  if (!param) {
    throwMissingError(target);
  }

  if (!isNumber(param)) {
    throwInvalidError(`Unable to convert ${target}: '${param}' to number`);
  }
  if (Number(param) < 10) {
    throwInvalidError(`${target} is < 10`);
  }
  return Number(param);
};

const toNewJourneyEntry = (newEntry: JourneyFields): NewJourney => {
  const {
    departureTime,
    arrivalTime,
    departureStationId,
    arrivalStationId,
    coveredDistance,
    duration,
  } = newEntry;

  const validNewEntry: NewJourney = {
    departureTime: parseDate(departureTime, 'departure time'),
    arrivalTime: parseDate(arrivalTime, 'arrival time'),
    departureStationId: parseStationId(departureStationId, 'departure station id'),
    arrivalStationId: parseStationId(arrivalStationId, 'arrival station id'),
    coveredDistance: parseValidNumber(coveredDistance, 'covered distance'),
    duration: parseValidNumber(duration, 'duration'),
  };

  if (!isValidDate(arrivalTime, departureTime)) {
    throwInvalidError('arrival time is before departure time');
  }
  return validNewEntry;
};

export default toNewJourneyEntry;