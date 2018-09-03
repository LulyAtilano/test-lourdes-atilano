import React from 'react';
import PropTypes from 'prop-types';

import { Modal, ModalBody, ModalHeader, Button, Avatar } from '@/components';

function MuseumDetailModal(props) {
  const { museum, onClose } = props;
  const { name, image } = museum;

  return (
    <Modal id="museum-detail-modal" width={620} onClose={onClose}>
      <ModalHeader>
        <div className="col-2">
          <Avatar src={image} alt={name} />
        </div>
        <div className="col-10">
          <h1>{name}</h1>
        </div>
      </ModalHeader>
      <ModalBody>
        <p>
          {`"Don't fight it, use what happens. Everybody's different. Trees are different. 
            Let them all be individuals. Get away from those little Christmas tree things we used to make in school.
            This is your world, whatever makes you happy you can put in it. Go crazy."`}
        </p>
        <p>
          {'- Bob Ross'}
        </p>
      </ModalBody>
      <Button color="primary block" onClick={onClose}>Ok</Button>
    </Modal>
  );
}

MuseumDetailModal.defaultProps = {
  museum: {
    name: 'Demo',
  },
};

MuseumDetailModal.propTypes = {
  museum: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  onClose: PropTypes.func,
};

export default MuseumDetailModal;
