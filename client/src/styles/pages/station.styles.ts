import clsx from 'clsx';

const stationSection = clsx(
  [
    'h-full',
    'flex',
    'flex-col',
    'items-center',
    'gap-8',
    'p-4',
    'overflow-y-auto',
  ],
);

const statisticsSection = clsx(
  [
    'w-full',
    'flex',
    'flex-col',
    'items-center',
    'gap-8',
    'pt-0',
  ],
  [
    'sm:flex-row',
    'sm:justify-center',
  ],
);

export {
  stationSection,
  statisticsSection,
};
