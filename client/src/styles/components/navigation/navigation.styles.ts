import clsx from 'clsx';

function navigation(showNav: boolean) {
  const base = clsx(
    [
      'h-full',
      'flex',
      'flex-col',
      'gap-2',
      'py-2',
      'bg-solita-500',
      'overflow-hidden',
      'shrink-0',
    ],
    [
      'sm:w-20',
      'sm:px-2',
      'sm:animate-none',
      'sm:overflow-visible',
    ],
  );

  const isShow = clsx(
    [
      'animate-widthGrow',
    ],
  );

  const notShow = clsx(
    [
      'animate-widthShrink',
    ],
  );

  return showNav
    ? clsx(base, isShow)
    : clsx(base, notShow);
}

export default navigation;
