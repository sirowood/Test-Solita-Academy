import clsx from 'clsx';

const dashboard = clsx(
  [
    'flex-col',
    'items-center',
    'justify-center',
    'select-none',
  ],
);

const section = clsx(
  [
    'flex',
    'flex-col',
    'items-center',
    '-translate-y-1/2',
  ],
);

const heading = clsx(
  [
    'text-4xl',
    'font-extrabold',
    'animate-bounce',
  ],
);

export {
  heading,
  section,
  dashboard,
};
