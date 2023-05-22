import React, { useState } from 'react';
import { DialogFooter, Button } from '@material-tailwind/react';
import { Formik, Form, FormikHelpers } from 'formik';
import FormFields from './FormFields';
import {
  form,
  formFooter,
  messageDiv,
} from '../../../styles/components/list/form/addForm.styles';
import {
  AccProps,
  AddFormProps,
  MessageProps,
} from '../../../types/components/list/form/addForm.type';
import { AddFunctionProps } from '../../../types/services/add.type';

function AddForm({
  fields,
  validationSchema,
  addFunction,
  changeOpen,
}: AddFormProps) {
  const [message, setMessage] = useState<MessageProps | null>(null);
  const initialValues = fields.reduce((acc: AccProps, field) => {
    acc[field.fieldName] = field.initialValue;

    return acc;
  }, {});

  async function onSubmit(
    values: AccProps,
    { resetForm }: FormikHelpers<AccProps>,
  ) {
    try {
      await addFunction({ ...(values as AddFunctionProps) });
      setMessage({ text: 'Success!', color: 'green-500' });
      setTimeout(() => {
        setMessage(null);
        window.location.reload();
      }, 3000);
    } catch (e) {
      if (e instanceof Error) {
        setMessage({ text: e.message, color: 'red-500' });
        resetForm();
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount={true}
    >
      {({ isSubmitting, dirty, isValid, errors }) => (
        <Form className={form}>
          <FormFields
            fields={fields}
            errors={errors}
          />
          <DialogFooter className={formFooter}>
            {message ? (
              <div className={messageDiv(message.color)}>{message.text}</div>
            ) : (
              <>
                <Button
                  aria-label="Cancel button"
                  color="blue-gray"
                  onClick={changeOpen}
                >
                  Cancel
                </Button>
                <Button
                  aria-label="Reset button"
                  color="amber"
                  disabled={!dirty}
                  type="reset"
                >
                  Reset
                </Button>
                <Button
                  aria-label="Submit button"
                  type="submit"
                  disabled={isSubmitting || !dirty || !isValid}
                >
                  Submit
                </Button>
              </>
            )}
          </DialogFooter>
        </Form>
      )}
    </Formik>
  );
}

export default AddForm;
