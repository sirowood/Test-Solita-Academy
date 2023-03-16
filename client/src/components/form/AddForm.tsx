import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import FormMessage from './FormMessage';
import FormFields from './FormFields';
import FormButtons from './FormButtons';
import {
  AccProps,
  AddFormProps,
  MessageState,
} from '../../types/components/form/addForm.type';
import { AddFunctionProps } from '../../types/services/add.type';
import { MESSAGE } from '../../constants';
import { form } from '../../styles/components/form/addForm.styles';

function AddForm({
  fields,
  addType,
  validationSchema,
  addFunction,
}: AddFormProps) {
  const [message, setMessage] = useState<MessageState>(MESSAGE);

  const initialValues = fields.reduce((acc: AccProps, field) => {
    acc[field.fieldName] = field.initialValue;

    return acc;
  }, {});

  function ShowMessage(props: MessageState) {
    setMessage({ ...props });

    setTimeout(() => {
      setMessage(MESSAGE);
    }, 3000);
  }

  async function onSubmit(
    values: AccProps,
    { resetForm }: FormikHelpers<AccProps>,
  ) {
    try {
      await addFunction({ ...(values as AddFunctionProps) });
      ShowMessage({ text: 'Success!', backgroundColor: 'bg-green-400' });
    } catch (e) {
      if (e instanceof Error) {
        ShowMessage({ text: e.message, backgroundColor: 'bg-red-400' });
      }
    }
    resetForm();
  }

  return (
    <>
      {message.text && (
        <FormMessage
          message={message.text}
          backgroundColor={message.backgroundColor}
        />
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount={true}
      >
        {({ isSubmitting, dirty, isValid, errors, resetForm }) => (
          <Form className={form}>
            <FormFields
              fields={fields}
              errors={errors}
            />
            <FormButtons
              addType={addType}
              dirty={dirty}
              isValid={isValid}
              isSubmitting={isSubmitting}
              resetForm={resetForm}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddForm;
