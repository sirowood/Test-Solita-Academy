import clsx from 'clsx';

const stationError = clsx(
  [
    'w-full',
    'h-full',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
  ],
);

const errorMessage = clsx(
  [
    'text-lg',
    'font-bold',
  ],
);

const returnButton = clsx(
  [
    'rounded',
    'bg-solita-500',
    'px-2',
    'py-1',
    'shadow-md',
  ],
);

export {
  stationError,
  errorMessage,
  returnButton,
};
