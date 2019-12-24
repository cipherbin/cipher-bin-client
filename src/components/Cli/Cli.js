import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Terminal from '../shared/Terminal/Terminal';
import './Cli.css';

const Cli = () => (
  <Container>
    <div className="cli-wrapper">
      <h2 className="cli-header">
        Using the cipherbin CLI
      </h2>
      <h4>
        Learn how to use the CLI to simplify message creation and reading messages.
      </h4>
      <div className="download-options">
        <Tabs defaultActiveKey="brew">
          <Tab eventKey="brew" title="Brew">
            <div className="terminal-div">
              <Terminal
                commands={[
                  'brew tap bradford-hamilton/cipherbin',
                  'brew install bradford-hamilton/cipherbin/cipherbin',
                ]}
              />
            </div>
          </Tab>
          <Tab eventKey="mac" title="MacOS">
            <Terminal />
          </Tab>
          <Tab eventKey="linux" title="Linux">
            <Terminal />
          </Tab>
          <Tab eventKey="windows" title="Windows">
            <Terminal />
          </Tab>
        </Tabs>
      </div>
    </div>
  </Container>
);

export default Cli;
