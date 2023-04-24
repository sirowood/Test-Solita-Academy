import clsx from 'clsx';

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

export {
  filterRow,
  filterInput,
  singleFilter,
};
