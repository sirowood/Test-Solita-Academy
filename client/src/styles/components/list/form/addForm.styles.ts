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

function messageDiv(color: string) {
  const base = clsx(
    [
      'w-full',
      'rounded-md',
      'p-2',
      'text-center',
      'font-semibold',
      'text-white',
      'animate-fadeInFromBottom',
    ],
  );
  const bgColor = `bg-${color}`;

  return clsx(base, bgColor);
}

export {
  form,
  formFooter,
  messageDiv,
};
