import * as yup from 'yup';
import { addJourneyValidationSchema, addStationValidationSchema } from '../../schemas/form.schema';
import { Station } from './station.type';

type IndexProps = { [key: string]: string | number };

type AddJourneyProps = yup.InferType<typeof addJourneyValidationSchema> & IndexProps;

type AddStationProps = yup.InferType<typeof addStationValidationSchema>;

type AddFunctionProps = AddStationProps | AddJourneyProps;

type AddFunction = (params: AddFunctionProps) => Promise<Station | void>;

export { AddJourneyProps, AddFunctionProps, AddFunction };
