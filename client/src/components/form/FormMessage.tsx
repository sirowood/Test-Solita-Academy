import React from 'react';
import formMessageSection from '../../styles/components/form/formMessage.styles';
import FormMessageProps from '../../types/components/form/formMessage.type';

function FormMessage({ message, backgroundColor }: FormMessageProps) {
  return (
    <section className={formMessageSection(backgroundColor)}>{message}</section>
  );
}

export default FormMessage;
