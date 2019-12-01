import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = ({ history }) => {
  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className="nav-bar-wrapper">
      <Container>
        <div
          tabIndex="0"
          onClick={handleClick}
          onKeyPress={handleClick}
          role="button"
          className="brand"
        >
          cipherb.in
        </div>
      </Container>
    </div>
  );
};

export default withRouter(NavigationBar);

NavigationBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
