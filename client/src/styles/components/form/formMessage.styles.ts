import clsx from 'clsx';

function formMessageSection(bgColor: string) {
  const base = clsx(
    [
      'absolute',
      'top-16',
      'left-1/2',
      'z-20',
      '-translate-x-1/2',
      'rounded-md p-4 text-xl',
    ],
  );

  return clsx(base, bgColor);
}

export default formMessageSection;
