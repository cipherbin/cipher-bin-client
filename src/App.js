import React from 'react';
// import { Container, Row } from 'react-bootstrap';
import NavigationBar from './NavigationBar/NavigationBar';
import CipherBin from './CipherBin/CipherBin';
import './App.css';

function App() {
  return (
    <div className="cipher-bin-root">
      <NavigationBar />
      <CipherBin />
    </div>
  );
}

export default App;
