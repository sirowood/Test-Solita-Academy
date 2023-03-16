import clsx from 'clsx';

const dashBoardSection = clsx(
  [
    'w-full',
    'h-full',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'text-white',
  ],
);

const heading = clsx(
  [
    'text-4xl',
    'text-center',
    'font-extrabold',
    'animate-bounce',
  ],
);

export {
  heading,
  dashBoardSection,
};
