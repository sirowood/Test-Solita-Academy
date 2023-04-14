import React from 'react';
import AddForm from '../form/AddForm';
import { addJourneyValidationSchema } from '../../schemas/form.schema';
import { addJourney } from '../../services/journey.service';
import { ADD_JOURNEY_FIELDS } from '../../constants';

type AddJourneyProps = {
  open: boolean;
  changeOpen: () => void;
};

function AddJourney({ open, changeOpen }: AddJourneyProps) {
  if (!open) {
    return null;
  }

  return (
    <section className="absolute top-0 left-0">
      <div
        role="presentation"
        className="fixed z-10 h-screen w-screen bg-gray-800/30 backdrop-blur-sm"
        onClick={changeOpen}
      />
      <div className="fixed top-1/2 left-1/2 z-20 flex h-max max-h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-md bg-solita-500 shadow-2xl sm:max-w-xl">
        <div className="sticky top-0 z-30 bg-solita-500 p-4 text-2xl font-semibold shadow-md shadow-gray-900">
          Add Journey
        </div>
        <div>
          <AddForm
            fields={ADD_JOURNEY_FIELDS}
            addFunction={addJourney}
            validationSchema={addJourneyValidationSchema}
            changeOpen={changeOpen}
          />
        </div>
      </div>
    </section>
  );
}

export default AddJourney;
