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

function link(isActive: boolean) {
  const base = clsx(
    [
      'mx-auto',
      'p-3',
      'text-4xl',
      'duration-150',
    ],
  );

  const active = clsx(
    [
      'rounded-[28px]',
      'bg-solita-400',
      'text-white',
      'hover:cursor-default',
    ],
  );

  const notActive = clsx(
    [
      'rounded-md',
      'text-solita-400',
      'hover:bg-solita-400/50',
      'hover:text-white/80',
      'active:translate-y-0.5',
    ],
  );

  return isActive
    ? clsx(base, active)
    : clsx(base, notActive);
}

export {
  navigation,
  link,
};
