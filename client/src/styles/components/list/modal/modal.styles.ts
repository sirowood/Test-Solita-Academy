import clsx from 'clsx';

const modalAside = clsx(
  [
    'absolute',
    'top-0',
    'left-0',
    'h-full',
    'w-full',
  ],
);

const modalBackground = clsx(
  [
    'z-10',
    'absolute',
    'h-full',
    'w-full',
    'bg-gray-800/30',
    'backdrop-blur-sm',
  ],
);

const modalWindow = clsx(
  [
    'z-20',
    'absolute',
    'top-1/2',
    'left-1/2',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'flex',
    'flex-col',
    'h-max',
    'max-h-[90%]',
    'w-[90%]',
    'overflow-y-auto',
    'rounded-md',
    'bg-solita-500',
    'shadow-2xl',
    'sm:max-w-xl',
    'gap-4',
  ],
);

export {
  modalAside,
  modalBackground,
  modalWindow,
};
