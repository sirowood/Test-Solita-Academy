import React from 'react';
import { ErrorMessage, Field } from 'formik';
import SelectField from './SelectField';
import FormFieldsProps from '../../../types/components/list/form/formFields.type';
import {
  formFields,
  formInput,
  formInputErrorMessage,
  formInputFloatingLabel,
  formInputGroup,
} from '../../../styles/components/list/form/formFields.styles';

function FormFields({ fields, errors }: FormFieldsProps) {
  return (
    <section className={formFields}>
      {fields
        .filter(({ select }) => select)
        .map(({ fieldName, displayName }) => (
          <SelectField
            key={fieldName}
            field={fieldName}
            displayName={displayName}
          />
        ))}
      {fields
        .filter((field) => !field.select)
        .map(({ type, required, fieldName, displayName }) => (
          <div
            className={formInputGroup}
            key={fieldName}
          >
            <Field
              className={formInput(errors[fieldName])}
              type={type}
              placeholder=" "
              name={fieldName}
              autoComplete="off"
            />
            <span
              className={formInputFloatingLabel(errors[fieldName])}
            >{`${displayName}${required ? '' : '(optional)'}`}</span>
            <ErrorMessage
              name={fieldName}
              className={formInputErrorMessage}
              component="span"
            />
          </div>
        ))}
    </section>
  );
}

export default FormFields;
