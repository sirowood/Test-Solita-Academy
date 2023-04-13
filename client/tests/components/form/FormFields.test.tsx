import React from 'react';
import { render } from '@testing-library/react';
import { Formik, FormikErrors } from 'formik';
import FormFields from '../../../src/components/form/FormFields';
import { ADD_JOURNEY_FIELDS } from '../../../src/constants';

jest.mock('../../../src/services/station.service', () => ({
  fetchStationsBySearch: jest.fn(),
}));

describe('FormField', () => {
  const initialValues = ADD_JOURNEY_FIELDS.reduce(
    (acc, field) => ({ ...acc, [field.fieldName]: field.initialValue }),
    {},
  );

  const errors: FormikErrors<typeof initialValues> = {
    departureTime: 'Departure time is required',
    arrivalTime: '',
  };

  it('renders correctly', () => {
    const { getByText } = render(
      <Formik
        initialValues={initialValues}
        onSubmit={jest.fn()}
      >
        <FormFields
          fields={ADD_JOURNEY_FIELDS}
          errors={errors}
        />
      </Formik>,
    );

    ADD_JOURNEY_FIELDS.forEach((field) => {
      expect(getByText(field.displayName)).toBeDefined();
    });
  });
});
