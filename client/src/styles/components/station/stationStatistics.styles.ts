import clsx from 'clsx';

const singleStatistics = clsx(
  [
    'w-full',
    'h-fit',
    'flex',
    'flex-col',
    'items-center',
    'rounded-md',
    'shadow-2xl',
    'bg-solita-500/50',
    'select-none',
    'p-6',
  ],
  [
    'sm:min-w-fit',
    'sm:max-w-xs',
  ],
);

const statisticsHeading = clsx(
  [
    'text-2xl',
    'font-bold',
    'text-center',
  ],
);

const statisticsSubDiv = clsx(
  [
    'flex',
    'flex-col',
    'items-center',
    'mt-2',
  ],
);

const statisticsNumber = clsx(
  [
    'font-mono',
    'text-xl',
    'border-b-2',
  ],
);

const horizontalLine = clsx(
  [
    'w-full',
    'h-0.5',
    'mt-4',
    'bg-gradient-to-r',
    'from-transparent',
    'via-solita-400',
    'to-transparent',
  ],
);

const tops = clsx(
  [
    'w-full',
    'mt-4',
    'flex',
    'flex-col',
    'items-center',
  ],
);

const topsHeading = clsx(
  [
    'text-xl',
  ],
);

const topsList = clsx(
  [
    'w-full',
    'flex',
    'flex-col',
    'items-center',
    'gap-2',
  ],
);

const topsItem = clsx(
  [
    'w-full',
    'text-center',
    'bg-solita-400/50',
    'rounded-3xl',
    'p-2',
    'text-gray-300',
    'duration-150',
  ],
  [
    'hover:text-white',
    'hover:bg-solita-400',
    'hover:shadow-lg',
    'hover:scale-105',
  ],
);

export {
  tops,
  topsItem,
  topsList,
  topsHeading,
  horizontalLine,
  statisticsNumber,
  statisticsSubDiv,
  singleStatistics,
  statisticsHeading,
};
