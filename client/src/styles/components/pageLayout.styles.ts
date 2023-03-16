import clsx from 'clsx';

const pageLayoutBase = clsx(
  [
    'w-full',
    'h-full',
    'flex',
    'flex-col',
    'bg-solita-400',
    'text-white',
  ],
);

function pageLayout(classProps: string | undefined) {
  return classProps
    ? clsx(pageLayoutBase, classProps)
    : pageLayoutBase;
}

export default pageLayout;
