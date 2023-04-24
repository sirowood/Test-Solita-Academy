import clsx from 'clsx';

const listTopBarDiv = clsx(
  [
    'ml-auto',
    'flex',
    'flex-row',
    'items-center',
    'gap-2',
  ],
);

const searchDiv = clsx(
  [
    'flex',
    'flex-row',
    'items-center',
    'gap-2',
    'rounded-2xl',
    'bg-solita-500',
    'pr-2',
  ],
);

const searchInput = clsx(
  [
    'h-8',
    'w-20',
    'appearance-none',
    'rounded-r-none',
    'rounded-l-2xl',
    'bg-solita-500',
    'px-2',
    'outline-none',
    'duration-150',
    'focus:w-36',
  ],
);

const addNewButton = clsx(
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
  ],
);

export {
  listTopBarDiv,
  searchDiv,
  searchInput,
  addNewButton,
};
