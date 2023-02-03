import clsx from 'clsx';

const tableSection = clsx(
  [
    'select-none',
    'h-full',
    'flex',
    'flex-col',
    'px-4',
    'py-2',
    'justify-between',
    'gap-2',
    'overflow-x-auto',
  ],
);

const tableCellBase = clsx(
  [
    'px-2',
    'whitespace-nowrap',
    'overflow-x-hidden',
    'text-ellipsis',
  ],
);

const tableHeadRow = clsx(
  [
    'h-12',
    'border-b-2',
  ],
);

const tableHeadCell = clsx(
  tableCellBase,
  [
    'hover:cursor-pointer',
    'hover:bg-solita-500/80',
    'duration-150',
  ],
);

function tableHeadCellText(isNumber: boolean) {
  const base = clsx(
    [
      'flex',
      'flex-row',
      'items-center',
    ],
  );

  return isNumber
    ? clsx(base, 'justify-end')
    : clsx(base, 'justify-start');
}

function tableBodyRow(isNavigatable: boolean) {
  const base = clsx(
    [
      'h-12',
      'border-b-[1px]',
      'hover:bg-solita-500/80',
    ],
  );

  const navigatable = clsx(
    [
      'hover:cursor-pointer',
    ],
  );

  return isNavigatable
    ? clsx(base, navigatable)
    : base;
}

function tableBodyCell(isNumber: boolean) {
  return isNumber
    ? clsx(tableCellBase, 'text-right')
    : tableCellBase;
}

export {
  tableHeadRow,
  tableSection,
  tableHeadCell,
  tableBodyRow,
  tableBodyCell,
  tableHeadCellText,
};
