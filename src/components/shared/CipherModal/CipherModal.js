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
    onHide={close}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {heading}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {body}
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={close} size="md" variant="danger">
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
  body: PropTypes.node.isRequired,
};

CipherModal.defaultProps = {
  buttonTxt: 'Close',
};
