const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string) => {
  return Boolean(Date.parse(date));
};

const isNumber = (text: string) => {
  return !isNaN(Number(text));
};

const throwMissingError = (target: string) => {
  throw {
    name: 'Missing data',
    message:`Missing ${target}`
  };
};

const throwInvalidError = (message: string) => {
  throw {
    name: 'Invalid data',
    message,
  };
};

export {
  isString,
  isDate,
  isNumber,
  throwMissingError,
  throwInvalidError,
};