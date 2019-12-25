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
          Install the CLI
        </h5>
        <div className="section-indent">
          <Tabs defaultActiveKey="brew">
            <Tab eventKey="brew" title="brew">
              <div className="terminal-div">
                <Terminal
                  promptSymbol="$"
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
      <div className="commands-wrapper">
        <h5>Commands</h5>
        <div className="section-indent">
          <div className="command-name">
            <code>
              cipherbin create
            </code>
          </div>
          <Terminal
            commands={[
              `Usage:
    cipherbin create [flags]

  Flags:
    -e, --email string            when provided, a read receipt will be sent to this email upon read/destruction
    -h, --help                    help for create
    -p, --password string         provide an additional password to read the message
    -r, --reference_name string   requires: email flag. This reference name will be quoted in the read receipt email`
            ]}
          />
          <p className="command-explanation">
            Create new encrypted messages with the <code>create</code> command. It
            will open either your editor of choice (if you have <code>$EDITOR</code> env
            var set), or default to <code>vi</code>. As of now there is only
            specific support for VS Code. Other editors may work, but it&apos;s not
            guaranteed. Within the editor, type or paste your content. When you save
            and quit your message will be encrypted and posted to the cipherbin api.
            The one time use URL will be automatically copied to your
            clipboard and printed in your terminal.
          </p>
          <Terminal
            commands={[
              'Warning! This message will self destruct after reading it.',
              'https://cipherb.in/msg?bin=some_uuid;some_key',
            ]}
          />
          <p className="command-explanation border-bottom">
            It works similarly to a <code>git commit --amend</code> work-flow. The
            URL can now either be visited in a browser or the message can be read
            with the <code>read</code> command.
          </p>
          <div className="command-name">
            <code>
              cipherbin read
            </code>
          </div>
          <Terminal
            commands={[
              `Usage:
  cipherbin read [arg] [flags]

Flags:
  -h, --help   help for read
  -o, --open   open and view the message in the web app in your browser`,
            ]}
          />
          <p className="command-explanation">
            Read takes a single arg which is the cipherbin encrypted message URL. By default
            it will decrypt the message and print it inside your terminal. If you provide
            the <code>--open</code> (or <code>-o</code>) flag, it will open up the encrypted
            message inside your browser at <code>https://cipherb.in</code>. Ensure you put
            the URL arg inside single or double quotes.
          </p>
          <Terminal
            promptSymbol="$"
            commands={[
              'cipherbin read \'https://cipherb.in/msg?bin=some_uuid;some_key\' [...flags]',
            ]}
          />
        </div>
      </div>
    </div>
  </Container>
);

export default Cli;
