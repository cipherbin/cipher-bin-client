import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Button from '../Button/Button';

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
      <Button onClick={close} text={buttonTxt} />
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
