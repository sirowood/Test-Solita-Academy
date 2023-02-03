import clsx from 'clsx';

const station = clsx(
  [
    'flex-col',
    'items-center',
    'gap-8',
    'p-4',
  ],
);

const statisticsContainer = clsx(
  station,
  [
    'w-full',
    'flex',
    'pt-0',
  ],
  [
    'sm:flex-row',
    'sm:justify-center',
  ],
);

export { station, statisticsContainer };
