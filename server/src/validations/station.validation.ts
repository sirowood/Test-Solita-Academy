import { isString, isNumber, throwMissingError, throwInvalidError } from './helper.validation';
import { StationFields, NewStation } from '../types/station.type';

const parseString = (text: unknown, target: string): string => {
  if (!text) {
    throwMissingError(target);
  }
  if (!isString(text)) {
    throwInvalidError(`${target}: '${text}' is not a string`);
  }
  return text as string;
};

const parseOptionalString = (text: unknown, target: string): string => {
  if (!isString(text)) {
    throwInvalidError(`${target}: '${text}' is not a string`);
  }
  return text as string;
};

const parseNumber = (param: unknown, target: string): number => {
  if (!param) {
    throwMissingError(target);
  }
  if (!isString(param) || !isNumber(param)) {
    throwInvalidError(`${target}: '${param}' is not a valid number`);
  }
  return Number(param);
};

const parseX = (x: unknown, target: string): number => {
  const parsedX = parseNumber(x, target);
  if (Math.abs(parsedX) > 90) {
    throwInvalidError(`${target}: abs(${x}) is > 90`);
  }
  return parsedX;
};

const parseY = (y: unknown, target: string): number => {
  const parsedY = parseNumber(y, target);
  if (Math.abs(Number(y)) > 180) {
    throwInvalidError(`${target}: abs(${y}) is > 180`);
  }
  return parsedY;
};

const toNewStationEntry = (newEntry: StationFields): NewStation => {
  const {
    nimi,
    namn,
    name,
    osoite,
    adress,
    kaupunki,
    stad,
    operaattor,
    kapasiteet,
    x,
    y,
  } = newEntry;

  const validNewEntry: NewStation = {
    nimi: parseString(nimi, 'nimi'),
    namn: parseString(namn, 'namn'),
    name: parseString(name, 'name'),
    osoite: parseString(osoite, 'osoite'),
    adress: parseString(adress, 'adress'),
    kapasiteet: parseNumber(kapasiteet, 'kapasiteet'),
    x: parseX(x, 'x'),
    y: parseY(y, 'y'),
  };

  if (typeof kaupunki !== 'undefined') {
    validNewEntry.kaupunki = parseOptionalString(kaupunki, 'kaupunki');
  }

  if (typeof stad !== 'undefined') {
    validNewEntry.stad = parseOptionalString(stad, 'stad');
  }

  if (typeof operaattor !== 'undefined') {
    validNewEntry.operaattor = parseOptionalString(operaattor, 'operaattor');
  }

  return validNewEntry;
};

export default toNewStationEntry;