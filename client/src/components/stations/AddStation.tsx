import React from 'react';
import { Modal, ModalHeader, ModalBody } from '../modal';
import AddForm from '../form/AddForm';
import { addStationValidationSchema } from '../../schemas/form.schema';
import { addStation } from '../../services/station.service';
import { ADD_STATION_FIELDS } from '../../constants';

type AddStationProps = {
  open: boolean;
  changeOpen: () => void;
};

function AddStation({ open, changeOpen }: AddStationProps) {
  if (!open) {
    return null;
  }

  return (
    <Modal changeOpen={changeOpen}>
      <ModalHeader>Add Station</ModalHeader>
      <ModalBody>
        <AddForm
          changeOpen={changeOpen}
          addFunction={addStation}
          fields={ADD_STATION_FIELDS}
          validationSchema={addStationValidationSchema}
        />
      </ModalBody>
    </Modal>
  );
}

export default AddStation;
