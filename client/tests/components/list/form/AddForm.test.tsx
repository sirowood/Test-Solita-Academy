import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddForm from '../../../../src/components/list/form/AddForm';
import { fetchStationsBySearch } from '../../../../src/services/station.service';
import { addJourneyValidationSchema } from '../../../../src/schemas/form.schema';
import { ADD_JOURNEY_FIELDS } from '../../../../src/constants';

jest.mock('../../../../src/services/station.service', () => ({
  fetchStationsBySearch: jest.fn(),
}));

describe('AddForm', () => {
  const mockProps = {
    fields: ADD_JOURNEY_FIELDS,
    addType: 'journey',
    validationSchema: addJourneyValidationSchema,
    open: true,
    addFunction: jest.fn(),
    changeOpen: jest.fn(),
  };

  beforeEach(async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <AddForm {...mockProps} />
        </MemoryRouter>,
      );
    });
  });

  it('renders correctly', async () => {
    ADD_JOURNEY_FIELDS.forEach((field) => {
      expect(screen.getByText(field.displayName)).toBeDefined();
    });
  });

  it('submit the form correctly', async () => {
    const fakeResponse = [
      { id: 1, nimi: 'Station 1' },
      { id: 2, nimi: 'Station 2' },
    ];

    (fetchStationsBySearch as jest.Mock).mockResolvedValue(fakeResponse);

    const [departureTime, arrivalTime] = screen.getAllByRole('textbox');

    const [coveredDistance, duration] = screen.getAllByRole('spinbutton');

    const [departureStation, arrivalStation] = screen.getAllByRole('combobox');

    await waitFor(async () => {
      fireEvent.change(departureTime, {
        target: { value: '2023-02-03 00:33:00' },
      });

      fireEvent.change(arrivalTime, {
        target: { value: '2023-02-03 00:34:00' },
      });

      fireEvent.input(coveredDistance, {
        target: { value: '100' },
      });

      fireEvent.input(duration, {
        target: { value: '100' },
      });
    });

    await waitFor(async () => {
      fireEvent.change(departureStation, { target: { value: 'station' } });
      const departureStationOption = screen.getAllByText('Station 1');
      fireEvent.click(departureStationOption[0]);
    });

    await waitFor(async () => {
      fireEvent.change(arrivalStation, { target: { value: 'station' } });
      const arrivalStationOption = screen.getAllByText('Station 2');
      fireEvent.click(arrivalStationOption[0]);
    });

    const addButton = screen.getByRole('button', { name: 'Submit' });
    await waitFor(async () => {
      fireEvent.click(addButton);
      expect(screen.getByText('Success!')).toBeDefined();
    });
  });
});
