import clsx from 'clsx';

const pagination = clsx(
  [
    'flex',
    'flex-row',
    'flex-wrap',
    'items-center',
    'gap-4',
  ],
);

const paginationButtons = clsx(
  [
    'flex',
    'flex-row',
    'items-center',
    'divide-x-[1px]',
    'border',
    'border-white',
  ],
);

const paginationPages = clsx(
  [
    'flex',
    'flex-row',
    'flex-wrap',
    'items-center',
    'gap-4',
  ],
);

const paginationSelect = clsx(
  [
    'px-2',
    'w-25',
    'h-8',
    'text-center',
    'align-middle',
    'rounded-md',
    'outline-none',
    'bg-solita-500',
  ],
);

function paginationButton(disabled: boolean, classPros?: string) {
  const base = clsx(
    [
      'h-8',
      'w-max',
      'min-w-[32px]',
      'flex',
      'flex-row',
      'items-center',
      'justify-center',
      'px-1',
      'duration-150',
      classPros,
    ],
  );

  const isDisabled = clsx(
    [
      'border-gray-400',
      'text-gray-400',
      'hover:cursor-default',
    ],
  );

  const notDisabled = clsx(
    [
      'duration-150',
      'hover:bg-white',
      'hover:text-solita-400',
    ],
  );

  return disabled
    ? clsx(base, isDisabled)
    : clsx(base, notDisabled);
}

export {
  pagination,
  paginationPages,
  paginationSelect,
  paginationButtons,
  paginationButton,
};
