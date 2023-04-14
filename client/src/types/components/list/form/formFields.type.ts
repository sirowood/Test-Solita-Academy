import { FormikErrors } from 'formik';
import { AccProps, Fields } from './addForm.type';

type FormFieldsProps = {
  fields: Fields,
  errors: FormikErrors<AccProps>,
};

export default FormFieldsProps;
