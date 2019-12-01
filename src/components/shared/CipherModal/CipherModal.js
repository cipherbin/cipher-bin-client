import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const CipherModal = ({
  show,
  close,
  buttonTxt,
  heading,
  body,
}) => (
  <Modal
    show={show}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {heading}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Centered Modal</h4>
      <p>
        {body}
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={close}>
        {buttonTxt}
      </Button>
    </Modal.Footer>
  </Modal>
);

export default CipherModal;

CipherModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  buttonTxt: PropTypes.string,
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

CipherModal.defaultProps = {
  buttonTxt: 'Close',
};
