import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = ({ history }) => {
  const handleClick = (route) => {
    history.push(route);
  };

  return (
    <div className="nav-bar-wrapper">
      <Container className="nav-bar-container">
        <div
          tabIndex="0"
          onClick={() => handleClick('/')}
          onKeyPress={() => handleClick('/')}
          role="button"
          className="brand"
        >
          cipherb.in
        </div>
        <div
          tabIndex="-1"
          onClick={() => handleClick('/')}
          onKeyPress={() => handleClick('/')}
          role="button"
          className="new"
        >
          New
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
