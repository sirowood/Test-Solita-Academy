import clsx from 'clsx';

const listControlBarSection = clsx(
  [
    'flex shrink-0',
    'flex-row',
    'items-center',
    'gap-2',
    'overflow-x-auto',
    'bg-solita-400',
    'p-2',
    'shadow-xl',
  ],
);

const arrowsDiv = clsx(
  [
    'flex',
    'flex-row',
    'items-center',
    'gap-1',
  ],
);

const arrowButton = clsx(
  [
    'rounded',
    'border-[1px]',
    'border-gray-400',
    'text-gray-400',
    'duration-75',
    'hover:cursor-pointer',
    'hover:border-white',
    'hover:text-white',
    'active:scale-95',
    'disabled:border-gray-600',
    'disabled:text-gray-600',
    'disabled:hover:cursor-default',
    'disabled:active:scale-100',
  ],
);

const pageSizeSelect = clsx(
  [
    'appearance-none',
    'rounded',
    'bg-solita-500',
    'px-2',
    'py-1',
    'outline-none',
  ],
);

const orderDiv = clsx(
  [
    'flex',
    'flex-row',
    'items-center',
    'gap-2',
  ],
);

const orderSelect = clsx(
  [
    'w-24',
    'appearance-none',
    'truncate',
    'rounded',
    'bg-solita-500',
    'px-2',
    'py-1',
    'outline-none',
    'sm:w-max',
  ],
);

const genericButton = clsx(
  [
    'text-gray-400',
    'duration-75',
    'hover:cursor-pointer',
    'hover:text-white',
  ],
);

export {
  listControlBarSection,
  arrowsDiv,
  arrowButton,
  pageSizeSelect,
  orderDiv,
  orderSelect,
  genericButton,
};
