import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <Container>
      Made with&nbsp;
      <span
        role="img"
        aria-label="footer content: Built with love by Bradford Lamson-Scribner"
      >
        ❤️
      </span>
      on&nbsp;
      <a
        href="https://github.com/cipherbin"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </Container>
  </div>
);

export default Footer;
