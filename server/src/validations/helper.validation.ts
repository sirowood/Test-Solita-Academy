function isString(text: unknown): text is string {
  return typeof text === 'string' || text instanceof String;
}

function isDate(date: string) {
  return Boolean(Date.parse(date));
}

function isNumber(text: unknown) {
  return !isNaN(Number(text));
}

function throwMissingError(target: string) {
  throw {
    name: 'Missing data',
    message: `Missing ${target}`
  };
}

function throwInvalidError(message: string) {
  throw {
    name: 'Invalid data',
    message,
  };
}

export {
  isString,
  isDate,
  isNumber,
  throwMissingError,
  throwInvalidError,
};