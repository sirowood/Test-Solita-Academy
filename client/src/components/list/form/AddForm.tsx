import React from 'react';
import { DialogFooter, Button } from '@material-tailwind/react';
import { Formik, Form, FormikHelpers } from 'formik';
import FormFields from './FormFields';
import {
  form,
  formFooter,
} from '../../../styles/components/list/form/addForm.styles';
import {
  AccProps,
  AddFormProps,
} from '../../../types/components/list/form/addForm.type';
import { AddFunctionProps } from '../../../types/services/add.type';

function AddForm({
  fields,
  validationSchema,
  addFunction,
  changeOpen,
}: AddFormProps) {
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
    } catch (e) {
      if (e instanceof Error) {
        return;
      }
    }
    resetForm();
  }

  return (
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
          <DialogFooter className={formFooter}>
            <Button
              color="blue-gray"
              onClick={changeOpen}
            >
              Cancel
            </Button>
            <Button
              color="amber"
              disabled={!dirty}
              onClick={() => resetForm()}
            >
              Reset
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !dirty || !isValid}
            >
              Submit
            </Button>
          </DialogFooter>
        </Form>
      )}
    </Formik>
  );
}

export default AddForm;
