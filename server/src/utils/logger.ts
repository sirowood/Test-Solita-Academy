const info = (...params: [string]) => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  console.info('[INFO]', ...params);
};

const error = (...params: [string]) => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  console.error('[ERROR]', ...params);
};

export {
  info,
  error
};