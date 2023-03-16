import clsx from 'clsx';

const stationTopBarDiv = clsx(
  [
    'grow',
    'flex',
    'flex-row',
    'items-center',
    'justify-end',
    'gap-2',
  ],
);

const monthFilterDiv = clsx(
  [
    'flex',
    'flex-row',
    'items-center',
    'rounded-md',
    'bg-black',
  ],
);

const resetButton = clsx(
  [
    'px-1',
    'disabled:text-gray-600',
  ],
);

const input = clsx(
  [
    'h-8',
    'pl-2',
    'rounded-l-md',
    'invert',
    'text-black',
  ],
);

export {
  stationTopBarDiv,
  monthFilterDiv,
  input,
  resetButton,
};
