import clsx from 'clsx';

const stationCard = clsx(
  [
    'w-full',
    'h-fit',
    'rounded-md',
    'bg-solita-500',
    'shadow-2xl',
    'flex',
    'flex-col',
    'items-center',
    'gap-1',
    'p-6',
    'text-gray-400',
  ],
  [
    'sm:min-w-xs',
    'sm:max-w-2xl',
  ],
);

const stationName = clsx(
  [
    'text-3xl',
    'font-bold',
    'text-white',
  ],
);

const stationAddress = clsx(
  [
    'text-lg',
    'font-semibold',
  ],
);

const stationCapacity = clsx(
  [
    'flex',
    'flex-row',
    'items-center',
    'justify-center',
    'w-10',
    'h-10',
    'font-mono',
    'border-2',
    'border-gray-400',
    'select-none',
    'rounded-3xl',
  ],
);

export {
  stationCard,
  stationName,
  stationAddress,
  stationCapacity,
};
