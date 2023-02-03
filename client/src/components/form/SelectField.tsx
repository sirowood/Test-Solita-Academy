import React, { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';
import Select, { SingleValue } from 'react-select';
import useDebounce from '../../hooks/useSearchDebounce';
import { fetchStationsBySearch } from '../../services/station.service';
import { AddJourneyProps } from '../../types/services/add.type';
import {
  Option,
  SelectFieldProps,
} from '../../types/components/form/selectField.type';

function SelectField({ field, displayName }: SelectFieldProps) {
  const { setFieldValue, values } = useFormikContext<AddJourneyProps>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const { value, setValue, debouncedValue } = useDebounce({
    initialValue: '',
    milliseconds: 500,
  });

  async function updateOptions() {
    setIsLoading(true);
    const response = await fetchStationsBySearch({ nimi: debouncedValue });
    const newOptions = response.map((item) => ({
      value: item.id,
      label: item.nimi,
    }));
    setOptions(newOptions);
    setIsLoading(false);
  }

  function onChange(newSelectedOption: SingleValue<Option>) {
    if (!newSelectedOption) {
      return;
    }
    const newValue = newSelectedOption.value;
    setFieldValue(field, newValue.toString());
    setSelectedOption(newSelectedOption);
  }

  useEffect(() => {
    if (debouncedValue) {
      updateOptions();
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (!values[`${field}`]) {
      setValue('');
      setOptions([]);
      setSelectedOption(null);
    }
  }, [values]);

  return (
    <div className="flex flex-row items-end w-48">
      <Select
        className="w-full text-black"
        blurInputOnSelect
        placeholder={displayName}
        options={options}
        inputValue={value}
        value={selectedOption}
        isLoading={isLoading}
        onChange={onChange}
        onInputChange={setValue}
        styles={{
          indicatorSeparator: () => ({
            display: 'none',
          }),
        }}
      />
    </div>
  );
}

export default SelectField;
