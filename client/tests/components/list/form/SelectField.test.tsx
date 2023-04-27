import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Formik } from 'formik';
import SelectField from '../../../../src/components/list/form/SelectField';
import { fetchStationsBySearch } from '../../../../src/services/station.service';

jest.mock('../../../../src/services/station.service', () => ({
  fetchStationsBySearch: jest.fn(),
}));

describe('SelectField', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Formik
        initialValues={[{ departureStationId: '' }]}
        onSubmit={jest.fn()}
      >
        <SelectField
          field="departureStationId"
          displayName="Departure Station"
        />
      </Formik>,
    );

    expect(getByText('Departure Station')).toBeDefined();
  });

  it('should render the options', async () => {
    const fakeResponse = [
      { id: 1, nimi: 'Station 1' },
      { id: 2, nimi: 'Station 2' },
    ];

    (fetchStationsBySearch as jest.Mock).mockResolvedValue(fakeResponse);

    const { getByRole, getByText } = render(
      <Formik
        initialValues={[{ departureStationId: '' }]}
        onSubmit={jest.fn()}
      >
        <SelectField
          field="departureStationId"
          displayName="Departure Station"
        />
      </Formik>,
    );

    const inputElement = getByRole('combobox');

    expect(inputElement).toBeDefined();

    await waitFor(async () => {
      fireEvent.change(inputElement, { target: { value: 'station' } });

      expect(fetchStationsBySearch).toHaveBeenCalled();
      expect(getByText('Station 1')).toBeDefined();
      expect(getByText('Station 2')).toBeDefined();
    });
  });

  it('should render No options', async () => {
    const fakeResponse = [
      { id: 1, nimi: 'Station 1' },
      { id: 2, nimi: 'Station 2' },
    ];

    (fetchStationsBySearch as jest.Mock).mockResolvedValue(fakeResponse);

    const { getByRole, queryByText, getByText } = render(
      <Formik
        initialValues={[{ departureStationId: '' }]}
        onSubmit={jest.fn()}
      >
        <SelectField
          field="departureStationId"
          displayName="Departure Station"
        />
      </Formik>,
    );

    const inputElement = getByRole('combobox');
    expect(inputElement).toBeDefined();

    await waitFor(() => {
      fireEvent.change(inputElement, { target: { value: 'h' } });

      expect(fetchStationsBySearch).toHaveBeenCalled();
      expect(queryByText('Station 1')).toBeNull();
      expect(queryByText('Station 2')).toBeNull();
      expect(getByText('No options')).toBeDefined();
    });
  });
});
