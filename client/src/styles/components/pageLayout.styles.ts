import clsx from 'clsx';

const pageLayoutBase = clsx(
  [
    'flex',
    'flex-grow',
    'h-full',
    'w-screen',
    'bg-solita-400',
    'text-white',
    'overflow-y-auto',
    'overflow-x-hidden',
  ],
  [
    'sm:h-screen',
    'sm:w-full',
  ],
);

function pageLayout(classProps: string | undefined) {
  return classProps
    ? clsx(pageLayoutBase, classProps)
    : pageLayoutBase;
}

export default pageLayout;
