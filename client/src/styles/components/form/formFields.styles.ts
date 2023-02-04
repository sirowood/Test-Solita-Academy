import clsx from 'clsx';

const formFields = clsx(
  [
    'w-full',
    'flex',
    'flex-col',
    'items-center',
    'gap-8',
  ],
  [
    'sm:flex-row',
    'sm:flex-wrap',
    'sm:max-w-[528px]',
  ],
);

const formInputGroup = clsx(
  [
    'relative',
    'w-full',
    'max-w-xs',
    'flex',
    'flex-col',
    'justify-end',
  ],
  [
    'sm:max-w-[240px]',
  ],
);

const formInputErrorMessage = clsx(
  [
    'z-0',
    'text-sm',
    'absolute',
    '-bottom-[20px]',
    'text-red-400',
  ],
);

function formInput(error: string | undefined) {
  const base = clsx(
    [
      'peer',
      'outline-none',
      'appearance-none',
      'rounded-none',
      'border-b-[1px]',
      'bg-transparent',
      'pb-1',
      'pt-5',
      'duration-300',
    ],
    [
      'placeholder-shown:border-gray-500',
    ],
  );

  const hasError = clsx(
    [
      'border-red-400',
      'text-red-400',
    ],
    [
      'focus:border-red-400',
    ],
  );

  const noError = clsx(
    [
      'border-white',
    ],
    [
      'focus:border-white',
    ],
  );

  return error
    ? clsx(base, hasError)
    : clsx(base, noError);
}

function formInputFloatingLabel(error: string | undefined) {
  const base = clsx(
    [
      'absolute',
      'left-0',
      'bottom-1',
      'transform',
      'origin-[0]',
      '-translate-y-7',
      'text-xs',
      'duration-300',
    ],
    [
      'peer-focus:-translate-y-7',
      'peer-focus:text-xs',
    ],
    [
      'peer-placeholder-shown:text-base',
      'peer-placeholder-shown:text-gray-500',
      'peer-placeholder-shown:scale-100',
      'peer-placeholder-shown:translate-y-0',
    ],
  );

  const hasError = clsx(
    [
      'text-red-400',
      'peer-focus:text-red-400',
    ],
  );

  const noError = clsx(
    [
      'text-white',
      'peer-focus:text-white',
    ],
  );

  return error
    ? clsx(base, hasError)
    : clsx(base, noError);
}

export {
  formFields,
  formInputGroup,
  formInputErrorMessage,
  formInput,
  formInputFloatingLabel,
};
