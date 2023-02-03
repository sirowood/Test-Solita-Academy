import React from 'react';
import PageLayout from '../components/PageLayout';
import AddForm from '../components/form/AddForm';
import { addJourney } from '../services/journey.service';
import { addJourneyValidationSchema } from '../schemas/form.schema';
import { ADD_JOURNEY_FIELDS } from '../constants';
import addJourneyProps from '../styles/pages/addJourney.styles';

function AddJourney() {
  return (
    <PageLayout classProps={addJourneyProps}>
      <AddForm
        addType="journey"
        fields={ADD_JOURNEY_FIELDS}
        addFunction={addJourney}
        validationSchema={addJourneyValidationSchema}
      />
    </PageLayout>
  );
}

export default AddJourney;
