import { AddFunction } from '../../services/add.type';
import { addJourneyValidationSchema, addStationValidationSchema } from '../../../schemas/form.schema';

type Fields = {
  required: boolean,
  select?: boolean,
  fieldName: string,
  displayName: string,
  type: string,
  initialValue: string | number,
  min?: number,
  max?: number,
}[];

type ValidaionSchema = typeof addJourneyValidationSchema | typeof addStationValidationSchema;

type AddFormProps = {
  fields: Fields,
  addFunction: AddFunction,
  validationSchema: ValidaionSchema,
  changeOpen: () => void,
};

type AccProps = { [key: string]: string | number };

export { Fields, AddFormProps, AccProps, ValidaionSchema };
