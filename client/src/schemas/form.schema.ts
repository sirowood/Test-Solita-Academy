import * as yup from 'yup';

const addStationValidationSchema = yup.object({
  nimi: yup.string().required('Nimi is required'),
  osoite: yup.string().required('Osoite is required'),
  kapasiteet: yup
    .number()
    .required('Kapasiteet is required')
    .min(1, 'Minimum 1'),
  x: yup
    .number()
    .required('x is required')
    .min(-180, 'x should between -180 and 180')
    .max(180, 'x should between -180 and 180'),
  y: yup
    .number()
    .required('y is required')
    .min(-90, 'y should between -90 and 90')
    .max(90, 'y should between -180 and 180'),
  namn: yup.string().required('Namn is required'),
  name: yup.string().required('Name is required'),
  adress: yup.string().required('Adress is required'),
  kaupunki: yup.string(),
  stad: yup.string(),
  operaattor: yup.string(),
});

const addJourneyValidationSchema = yup.object({
  departureTime: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,
      'Correct format: YYYY-MM-DD HH:MM:SS',
    )
    .test('valid-datetime', 'Invalid datetime', (value) => {
      if (!value) {
        return true;
      }
      const date = new Date(value);
      return !Number.isNaN(date.getTime());
    })
    .required('Departure time is required'),
  arrivalTime: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,
      'Invalid date format. Correct format: YYYY-MM-DD HH:MM:SS',
    )
    .test('valid-datetime', 'Invalid datetime', (value) => {
      if (!value) {
        return true;
      }
      const date = new Date(value);
      return !Number.isNaN(date.getTime());
    })
    .required('Arrival time is required'),
  departureStationId: yup
    .number()
    .required('Departure station is required'),
  arrivalStationId: yup
    .number()
    .required('Arrival station is required'),
  coveredDistance: yup
    .number()
    .positive('Covered distance must be positive')
    .required('Covered distance is required'),
  duration: yup
    .number()
    .positive('Duration must be positive')
    .required('Duration is required'),
});

export {
  addStationValidationSchema,
  addJourneyValidationSchema,
};
