import clsx from 'clsx';

const formButtons = clsx(
  [
    'w-full',
    'flex',
    'flex-row',
    'justify-center',
    'gap-4',
  ],
);

const button = clsx(
  [
    'w-32',
    'h-10',
    'py-1',
    'rounded',
    'bg-solita-500',
    'text-lg',
    'duration-150',
  ],
  [
    'hover:shadow-lg',
    'hover:scale-105',
    'hover:bg-solita-500/60',
  ],
  [
    'disabled:text-solita-400',
    'disabled:hover:shadow-none',
    'disabled:hover:scale-100',
    'disabled:hover:bg-solita-500',
  ],
);

const resetButton = clsx(
  [
    'text-3xl',
    'duration-150',
  ],
  [
    'hover:scale-105',
  ],
  [
    'disabled:text-gray-500',
    'disabled:hover:scale-100',
  ],
);

export {
  button,
  formButtons,
  resetButton,
};
