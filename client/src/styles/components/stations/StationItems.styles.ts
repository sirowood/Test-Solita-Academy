import clsx from 'clsx';

const singleStationDiv = clsx(
  [
    'h-max',
    'flex',
    'flex-col',
    'rounded-lg',
    'bg-solita-500',
    'shadow-lg',
    'duration-150',
  ],
  [
    'sm:hover:scale-105',
    'sm:hover:shadow-xl',
  ],
);

const stationHeader = clsx(
  [
    'rounded-t-lg',
    'bg-gray-700/60',
    'py-1',
    'text-center',
    'text-xl',
    'font-semibold',
  ],
);

const stationBody = clsx(
  [
    'flex',
    'flex-row',
    'items-center',
    'gap-2',
    'p-2',
  ],
);

const bodyTextDiv = clsx(
  [
    'w-full',
    'flex',
    'flex-col',
  ],
);

const textSubDiv = clsx(
  [
    'flex flex-row gap-1',
  ],
);

const capacityDiv = clsx(
  [
    'h-10',
    'w-10',
    'shrink-0',
    'flex',
    'flex-row',
    'items-center',
    'justify-center',
    'rounded-3xl',
    'border-2',
    'border-gray-400',
    'font-mono',
  ],
);

export {
  singleStationDiv,
  stationHeader,
  stationBody,
  bodyTextDiv,
  textSubDiv,
  capacityDiv,
};
