import clsx from 'clsx';

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

export default link;
