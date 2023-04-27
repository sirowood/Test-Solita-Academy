import clsx from 'clsx';

const topBarSection = clsx(
  [
    'sticky',
    'top-0',
    'flex',
    'h-12',
    'w-full',
    'flex-row',
    'items-center',
    'gap-2',
    'bg-solita-400',
    'p-2',
    'shadow-lg',
  ],
);

function toggleButton(showNav: boolean) {
  const base = clsx(
    [
      'flex',
      'flex-row',
      'items-center',
      'duration-200',
    ],
    [
      'sm:hidden',
    ],
  );

  const isShow = clsx(
    [
      'text-white',
    ],
  );

  const notShow = clsx(
    [
      'text-gray-500',
    ],
  );

  return showNav
    ? clsx(base, isShow)
    : clsx(base, notShow);
}

const topBarTitle = clsx(
  [
    'select-none',
    'truncate',
    'text-2xl',
    'font-bold',
  ],
);

export {
  topBarSection,
  toggleButton,
  topBarTitle,
};
