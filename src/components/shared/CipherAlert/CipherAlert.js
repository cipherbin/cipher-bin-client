import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const CipherAlert = ({
  show,
  variant,
  message,
  dismissible,
}) => {
  const [alertShown, showAlert] = useState(show);

  return (
    <Alert
      style={{ marginTop: '20px' }}
      show={alertShown}
      variant={variant}
      onClose={() => showAlert(false)}
      dismissible={dismissible}
    >
      {message}
    </Alert>
  );
};

export default CipherAlert;

CipherAlert.propTypes = {
  show: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  message: PropTypes.string,
  dismissible: PropTypes.bool,
};

CipherAlert.defaultProps = {
  dismissible: true,
  message: '',
};
