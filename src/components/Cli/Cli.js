import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import Terminal from '../shared/Terminal/Terminal';
import NumberedList from '../shared/NumberedList/NumberedList';
import './Cli.css';

const Cli = () => (
  <Container>
    <div className="cli-wrapper">
      <h2 className="cli-header">
        Using the cipherbin CLI
      </h2>
      <h5>
        Learn how to use the CLI to simplify message creation and reading messages.
      </h5>
      <div className="download-options">
        <h5>
          Step 1: Install the CLI
        </h5>
        <Tabs defaultActiveKey="brew">
          <Tab eventKey="brew" title="brew">
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
            <p>To install the CLI without homebrew:</p>
            <NumberedList
              liContents={[
                <>
                  Download the latest <code>Darwin_x86_64</code> tar.gz file from&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/bradford-hamilton/cipher-bin-cli/releases/latest"
                  >
                    https://github.com/bradford-hamilton/cipher-bin-cli/releases/latest
                  </a>
                </>,
                <>
                  Unzip the file: <code>tar -xvf cipher-bin-cli_X.X.X_Darwin_x86_64.tar.gz</code>
                </>,
                <>
                  Optionally, install the binary in a location where you can
                  execute it globally (e.g., <code>~/usr/local/bin</code>)
                </>,
              ]}
            />
          </Tab>
          <Tab eventKey="linux" title="Linux">
            <p>To install the CLI on Linux</p>
            <NumberedList
              liContents={[
                <>
                  Download the latest <code>Linux_x86_64</code> tar.gz file from&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/bradford-hamilton/cipher-bin-cli/releases/latest"
                  >
                    https://github.com/bradford-hamilton/cipher-bin-cli/releases/latest
                  </a>
                </>,
                <>
                  Unzip the file: <code>tar -xvf cipher-bin-cli_X.X.X_Linux_x86_64.tar.gz</code>
                </>,
                <>
                  Run the executable <code>./cipherbin</code>
                </>,
              ]}
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  </Container>
);

export default Cli;
