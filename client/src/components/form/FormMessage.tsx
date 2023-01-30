import React from 'react';
import FormMessageProps from '../../types/components/form/formMessage.type';

function FormMessage({ message, backgroundColor }: FormMessageProps) {
  return (
    <section
      className={`absolute top-16 left-1/2 z-20 -translate-x-1/2 rounded-md p-4 text-xl ${backgroundColor}`}
    >
      {message}
    </section>
  );
}

export default FormMessage;
