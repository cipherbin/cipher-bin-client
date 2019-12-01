import React from 'react';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-wrapper">
      <Container>
        <h3>How it works</h3>
      </Container>
    </div>
  );
};

export default withRouter(HowItWorks);
