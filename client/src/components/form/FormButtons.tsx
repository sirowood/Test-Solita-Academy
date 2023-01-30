import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiReset as ResetIcon } from 'react-icons/bi';
import FormButtonsProps from '../../types/components/form/formButtons.type';

function FormButtons({
  dirty,
  addType,
  isValid,
  isSubmitting,
  resetForm,
}: FormButtonsProps) {
  const navigate = useNavigate();

  return (
    <section className="flex flex-row items-center">
      <button
        type="button"
        className="px-4 py-1 rounded bg-solita-500"
        onClick={() => navigate(`/${addType}s`)}
      >
        Cancel
      </button>
      <button
        className="duration-300 disabled:text-gray-500"
        disabled={!dirty}
        type="button"
        onClick={() => resetForm()}
      >
        <ResetIcon className="text-3xl" />
      </button>
      <button
        className="px-4 py-1 rounded bg-solita-500 disabled:text-solita-400"
        type="submit"
        disabled={isSubmitting || !dirty || !isValid}
      >
        Add
      </button>
    </section>
  );
}

export default FormButtons;
