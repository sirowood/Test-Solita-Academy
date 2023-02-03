import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiReset as ResetIcon } from 'react-icons/bi';
import FormButtonsProps from '../../types/components/form/formButtons.type';
import {
  button,
  formButtons,
  resetButton,
} from '../../styles/components/form/formButtons.styles';

function FormButtons({
  dirty,
  addType,
  isValid,
  isSubmitting,
  resetForm,
}: FormButtonsProps) {
  const navigate = useNavigate();

  return (
    <section className={formButtons}>
      <button
        type="button"
        className={button}
        onClick={() => navigate(`/${addType}s`)}
      >
        Cancel
      </button>
      <button
        className={resetButton}
        disabled={!dirty}
        type="button"
        onClick={() => resetForm()}
      >
        <ResetIcon />
      </button>
      <button
        className={button}
        type="submit"
        disabled={isSubmitting || !dirty || !isValid}
      >
        Add
      </button>
    </section>
  );
}

export default FormButtons;
