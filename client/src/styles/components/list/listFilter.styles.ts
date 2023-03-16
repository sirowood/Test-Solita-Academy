import clsx from 'clsx';

const filter = clsx(
  [
    'absolute',
    'top-0',
    'left-0',
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
    'gap-2',
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
