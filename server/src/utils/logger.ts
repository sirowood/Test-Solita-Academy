const info = (...params: [string]) => {
  console.info(...params);
};

const error = (...params: [string]) => {
  console.error(...params);
};

export {
  info,
  error
};