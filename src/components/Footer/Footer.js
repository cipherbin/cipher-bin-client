import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <Container>
      Built with&nbsp;
      <span
        role="img"
        aria-label="footer content: Built with love by Bradford Lamson-Scribner"
      >
        ❤️
      </span>
      by&nbsp;
      <a
        href="https://github.com/bradford-hamilton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bradford Lamson-Scribner
      </a>
    </Container>
  </div>
);

export default Footer;
