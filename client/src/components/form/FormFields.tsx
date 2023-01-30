import React from 'react';
import { Field } from 'formik';
import SelectField from './SelectField';
import FormFieldsProps from '../../types/components/form/formFields.type';

function FormFields({ fields, errors }: FormFieldsProps) {
  return (
    <section className="flex flex-row flex-wrap gap-2">
      {fields
        .filter((field) => !field.select)
        .map(({ type, required, fieldName, displayName }) => (
          <div
            className="relative flex flex-col justify-end w-48 rounded-sm"
            key={fieldName}
          >
            <Field
              className={`peer z-10 appearance-none rounded-none border-b-[1px] 
          bg-transparent pb-1 pt-5 outline-none duration-300
        placeholder-shown:border-gray-500 ${
          errors[fieldName]
            ? 'border-red-500 text-red-500 focus:border-red-500'
            : 'border-white focus:border-white'
        }`}
              type={type}
              placeholder=" "
              name={fieldName}
              autoComplete="off"
            />
            <span
              className={`absolute bottom-1 left-0 z-0 origin-[0]
          -translate-y-7 transform text-xs  duration-300
          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
          peer-focus:-translate-y-7 peer-focus:text-xs  ${
            errors[fieldName]
              ? 'text-red-500 peer-focus:text-red-500'
              : 'text-white peer-focus:text-white'
          }`}
            >{`${displayName}${required ? '' : '(optional)'}`}</span>
          </div>
        ))}
      {fields
        .filter(({ select }) => select)
        .map(({ fieldName, displayName }) => (
          <SelectField
            key={fieldName}
            field={fieldName}
            displayName={displayName}
          />
        ))}
    </section>
  );
}

export default FormFields;
