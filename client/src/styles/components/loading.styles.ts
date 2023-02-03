import clsx from 'clsx';

const loading = clsx(
  [
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'w-full',
    'h-full',
    'gap-1',
  ],
);

const loadingIcon = clsx(
  [
    'text-6xl',
    'animate-spin',
  ],
);

const loadingHeading = clsx(
  [
    'text-2xl',
    'animate-pulse',
  ],
);

const loadingText = clsx(
  [
    'opacity-0',
    'animate-fadeIn',
  ],
);

export {
  loading,
  loadingIcon,
  loadingText,
  loadingHeading,
};
