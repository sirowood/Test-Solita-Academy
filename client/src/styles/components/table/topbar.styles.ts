import clsx from 'clsx';

const topbar = clsx(
  [
    'w-full',
    'flex',
    'flex-row',
    'items-center',
    'justify-between',
    'h-12',
    'p-2',
    'shadow-lg',
    'relative',
    'gap-2',
  ],
);

const heading = clsx(
  [
    'text-2xl',
    'font-extrabold',
    'select-none',
  ],
);

const search = clsx(
  [
    'w-40',
    'min-w-[100px]',
    'flex',
    'flex-row',
    'items-center',
    'gap-1',
    'px-3',
    'py-1',
    'rounded-3xl',
    'bg-solita-500',
  ],
);

const input = clsx(
  [
    'w-full',
    'duration-300',
    'outline-none',
    'bg-inherit',
    'placeholder-solita-400',
  ],
);

const searchIcon = clsx(
  ['shrink-0'],
);

const buttons = clsx(
  [
    'flex',
    'flex-row',
    'items-center',
    'gap-2',
  ],
);

const singleButton = clsx(
  [
    'text-xl',
    'text-white/50',
    'hover:text-white',
  ],
);

export {
  input,
  search,
  topbar,
  heading,
  buttons,
  searchIcon,
  singleButton,
};
