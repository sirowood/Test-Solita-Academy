import React from 'react';
import PageLayout from '../components/PageLayout';
import AddForm from '../components/form/AddForm';
import { addStation } from '../services/station.service';
import { addStationValidationSchema } from '../schemas/form.schema';
import { ADD_STATION_FIELDS } from '../constants';

function AddStation() {
  return (
    <PageLayout className="relative flex-col p-4">
      <AddForm
        addType="station"
        fields={ADD_STATION_FIELDS}
        addFunction={addStation}
        validationSchema={addStationValidationSchema}
      />
    </PageLayout>
  );
}

export default AddStation;
