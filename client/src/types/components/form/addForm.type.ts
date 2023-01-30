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
  addType: string,
  fields: Fields,
  addFunction: AddFunction,
  validationSchema: ValidaionSchema,
};

type AccProps = { [key: string]: string | number };

type MessageState = {
  text: string,
  backgroundColor: string,
};

export { Fields, AddFormProps, AccProps, MessageState, ValidaionSchema };
