import clsx from 'clsx';

const singleJourneyDiv = clsx(
  [
    'flex',
    'flex-col',
    'gap-2',
    'font-mono',
    'rounded-lg',
    'shadow-lg',
    'h-max',
    'bg-solita-500',
  ],
);

const journeyBody = clsx(
  [
    'flex',
    'flex-row',
    'justify-between',
    'gap-1',
    'p-2',
  ],
);

const bodyStation = clsx(
  [
    'w-[45%]',
    'flex',
    'flex-col',
    'items-center',
    'text-center',
  ],
);

const stationName = clsx(
  [
    'w-full',
    'truncate',
    'font-sans',
    'text-lg',
    'font-semibold',
  ],
);

const rightArrowIconDiv = clsx(
  [
    'w-[10%]',
    'max-w-max',
    'flex',
    'flex-col',
    'justify-center',
  ],
);

const itemFooter = clsx(
  [
    'flex',
    'flex-row',
    'px-2',
    'py-1',
    'rounded-b-lg',
    'bg-gray-700/60',
  ],
);

const footerSubDiv = clsx(
  [
    'w-1/2',
    'flex',
    'flex-row',
    'items-center',
    'gap-2',
  ],
);

export {
  singleJourneyDiv,
  journeyBody,
  itemFooter,
  bodyStation,
  stationName,
  rightArrowIconDiv,
  footerSubDiv,
};
