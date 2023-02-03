import clsx from 'clsx';

const filter = clsx(
  [
    'absolute',
    'top-full',
    'left-1/2',
    '-translate-x-1/2',
    'h-max',
    'w-max',
    'rounded-lg',
    'bg-solita-500',
    'flex',
    'flex-col',
    'items-center',
    'gap-4',
    'p-2',
    'text-sm',
    'shadow-lg',
  ],
);

const singleFilter = clsx(
  [
    'flex',
    'flex-col',
    'items-center',
  ],
);

const filterRow = clsx(
  [
    'flex',
    'flex-row',
    'items-center',
    'gap-1',
  ],
);

const filterInput = clsx(
  [
    'w-[140px]',
    'rounded-md',
    'bg-solita-400',
    'p-1',
  ],
);

const button = clsx(
  [
    'rounded-sm',
    'p-1',
    'text-3xl',
    'duration-150',
    'hover:bg-solita-400',
    'active:translate-y-0.5',
    'active:text-gray-400',
  ],
);

export {
  button,
  filter,
  filterRow,
  filterInput,
  singleFilter,
};
