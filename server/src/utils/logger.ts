function getTimeNow() {
  const now = new Date().toLocaleTimeString(
    'en-US',
    { hour12: false }
  );

  return now;
}

function info(...params: [string]) {
  if (process.env.NODE_ENV === 'test') {
    return;
  }

  console.info('\x1b[36m[INFO]', getTimeNow(), ...params, '\x1b[0m');
}

function error(...params: [string]) {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  console.error('\x1b[31m[ERROR]', getTimeNow(), ...params, '\x1b[0m');
}

export {
  info,
  error
};