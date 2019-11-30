import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        cipherb.in
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default NavigationBar;