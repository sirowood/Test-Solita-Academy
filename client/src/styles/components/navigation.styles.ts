import clsx from 'clsx';

const navigation = clsx(
  [
    'flex',
    'flex-row',
    'flex-shrink-0',
    'w-full',
    'gap-2',
    'px-4',
    'py-2',
    'bg-solita-500',
    'sm:w-fit',
    'sm:flex-col',
    'sm:px-2',
  ],
);

const linkCommon = clsx(
  [
    'mx-auto',
    'p-3',
    'text-4xl',
    'duration-150',
  ],
);

const linkIsActive = clsx(
  [
    'rounded-[28px]',
    'bg-solita-400',
    'text-white',
    'hover:cursor-default',
  ],
);

const linkNotActive = clsx(
  [
    'rounded-md',
    'text-solita-400',
    'hover:bg-solita-400/50',
    'hover:text-white/80',
    'active:translate-y-0.5',
  ],
);

const linkButton = clsx(
  [
    'relative',
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'group',
  ],
);

const tooltipTextBase = clsx(
  [
    'absolute',
    'top-[72px]',
    'hidden',
    'select-none',
    'rounded',
    'bg-solita-500',
    'py-1',
    'px-2',
    'text-white',
    'shadow-lg',
    'z-40',
  ],
  [
    'sm:top-3.5',
    'sm:left-[72px]',
  ],
);

const tooltipArrowBase = clsx(
  [
    'absolute',
    '-bottom-3',
    'hidden',
    'border-4',
    'border-x-transparent',
    'border-b-solita-500',
    'border-t-transparent',
    'z-40',
  ],
  [
    'sm:bottom-[26px]',
    'sm:-right-3',
    'sm:border-x-4',
    'sm:border-y-transparent',
    'sm:border-l-transparent',
    'sm:border-r-solita-500',
  ],
);

function link(isActive: boolean) {
  return isActive
    ? clsx(linkCommon, linkIsActive)
    : clsx(linkCommon, linkNotActive);
}

function tooltipText(isAcitve: boolean) {
  return isAcitve
    ? tooltipTextBase
    : clsx(tooltipTextBase, 'group-hover:block');
}

function tooltipArrow(isAcitve: boolean) {
  return isAcitve
    ? tooltipArrowBase
    : clsx(tooltipArrowBase, 'group-hover:block');
}

export {
  linkButton,
  navigation,
  link,
  tooltipText,
  tooltipArrow,
};
