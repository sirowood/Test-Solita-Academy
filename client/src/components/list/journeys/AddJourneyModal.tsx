import React from 'react';
import { Modal, ModalHeader, ModalBody } from '../modal';
import AddForm from '../form/AddForm';
import { addJourneyValidationSchema } from '../../../schemas/form.schema';
import { addJourney } from '../../../services/journey.service';
import { ADD_JOURNEY_FIELDS } from '../../../constants';

type AddJourneyModalProps = {
  changeOpen: () => void;
};

function AddJourneyModal({ changeOpen }: AddJourneyModalProps) {
  return (
    <Modal changeOpen={changeOpen}>
      <ModalHeader>Add Journey</ModalHeader>
      <ModalBody>
        <AddForm
          fields={ADD_JOURNEY_FIELDS}
          addFunction={addJourney}
          validationSchema={addJourneyValidationSchema}
          changeOpen={changeOpen}
        />
      </ModalBody>
    </Modal>
  );
}

export default AddJourneyModal;
