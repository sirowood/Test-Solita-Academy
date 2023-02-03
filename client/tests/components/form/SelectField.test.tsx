import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Formik } from 'formik';
import SelectField from '../../../src/components/form/SelectField';
import { fetchStationsBySearch } from '../../../src/services/station.service';

jest.mock('../../../src/services/station.service', () => ({
  fetchStationsBySearch: jest.fn(),
}));

test('should render correctly', () => {
  render(
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

  expect(screen.getByText('Departure Station')).toBeDefined();
});

test('should render the options', async () => {
  const fakeResponse = [
    { id: 1, nimi: 'Station 1' },
    { id: 2, nimi: 'Station 2' },
  ];
  (fetchStationsBySearch as jest.Mock).mockResolvedValue(fakeResponse);
  render(
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

  const inputElement = screen.getByRole('combobox');
  expect(inputElement).toBeDefined();

  await waitFor(async () => {
    fireEvent.change(inputElement, { target: { value: 'station' } });
    expect(fetchStationsBySearch).toHaveBeenCalled();
    expect(screen.getByText('Station 1')).toBeDefined();
    expect(screen.getByText('Station 2')).toBeDefined();
  });
});

test('should render No Stations', async () => {
  const fakeResponse = [
    { id: 1, nimi: 'Station 1' },
    { id: 2, nimi: 'Station 2' },
  ];
  (fetchStationsBySearch as jest.Mock).mockResolvedValue(fakeResponse);
  render(
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

  const inputElement = screen.getByRole('combobox');
  expect(inputElement).toBeDefined();

  await waitFor(() => {
    fireEvent.change(inputElement, { target: { value: 'h' } });
    expect(fetchStationsBySearch).toHaveBeenCalled();
    expect(screen.queryByText('Station 1')).toBeNull();
    expect(screen.queryByText('Station 2')).toBeNull();
    expect(screen.getByText('No options')).toBeDefined();
  });
});
