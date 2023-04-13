import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StationTopBar from '../../../src/components/station/StationTopBar';

describe('StationTopBar', () => {
  const mockProps = {
    monthFilter: '2023-04',
    setMonthFilter: jest.fn(),
  };

  it('renders correctly', () => {
    const { getByTitle } = render(<StationTopBar {...mockProps} />);

    const input = getByTitle('Month filter') as HTMLInputElement;
    const resetButton = getByTitle(
      'Reset month filter button',
    ) as HTMLButtonElement;

    expect(input).toBeDefined();
    expect(input.type).toBe('month');
    expect(input.value).toBe(mockProps.monthFilter);
    expect(resetButton).toBeDefined();
    expect(resetButton.disabled).toBeFalsy();
  });

  it('calls the setMonthFilter function when the input value changes', () => {
    const { getByTitle } = render(<StationTopBar {...mockProps} />);

    const input = getByTitle('Month filter');

    fireEvent.change(input, { target: { value: '2023-05' } });
    expect(mockProps.setMonthFilter).toHaveBeenCalledTimes(1);
    expect(mockProps.setMonthFilter).toHaveBeenCalledWith('2023-05');
  });

  it('calls the resetMonthFilter function when the reset button is clicked', () => {
    const { getByTitle } = render(<StationTopBar {...mockProps} />);

    const resetButton = getByTitle('Reset month filter button');

    fireEvent.click(resetButton);

    expect(mockProps.setMonthFilter).toHaveBeenCalled();
    expect(mockProps.setMonthFilter).toHaveBeenCalledWith('');
  });

  it('disables the reset button when the input value is empty', () => {
    const monthFilter = '';
    const setMonthFilter = jest.fn();
    const { getByTitle } = render(
      <StationTopBar
        monthFilter={monthFilter}
        setMonthFilter={setMonthFilter}
      />,
    );

    const resetButton = getByTitle(
      'Reset month filter button',
    ) as HTMLButtonElement;
    expect(resetButton.disabled).toBeTruthy();
  });
});
