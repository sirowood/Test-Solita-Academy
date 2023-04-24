import clsx from 'clsx';

const form = clsx(
  [
    'flex',
    'flex-col',
    'items-center',
    'gap-4',
    'text-white',
  ],
);

const formHeading = clsx(
  [
    'text-3xl',
    'select-none',
  ],
);

const formFooter = clsx(
  [
    'z-30',
    'sticky',
    'bottom-0',
    'w-full',
    'gap-2',
    'bg-solita-500',
    'shadow-[0_-4px_6px_-1px_#212121]',
  ],
);

export {
  form,
  formHeading,
  formFooter,
};
