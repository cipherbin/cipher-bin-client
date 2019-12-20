import React, { Component } from 'react';
import {
  Container,
  Form,
  Spinner,
  Badge,
  Col,
  Row,
} from 'react-bootstrap';
import { AES } from 'crypto-js';
import uuidv4 from 'uuid/v4';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CipherModal from '../shared/CipherModal/CipherModal';
import CipherAlert from '../shared/CipherAlert/CipherAlert';
import SelectAllInput from '../shared/SelectAllInput/SelectAllInput';
import Button from '../shared/Button/Button';
import './CipherBinWrite.css';

class CipherBinWrite extends Component {
  state = {
    message: '',
    email: '',
    referenceName: '',
    oneTimeUrl: null,
    showModal: false,
    error: null,
    isLoading: false,
    copied: false,
    showOptions: false,
    password: null,
  };

  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, referenceName } = this.state;
    const encryptionKey = Math.random().toString(36).slice(-10);
    const uuid = uuidv4();
    const cipherText = AES.encrypt(this.state.message, encryptionKey).toString();
    const payload = {
      uuid,
      email,
      reference_name: referenceName,
      message: cipherText,
    };

    try {
      await axios({
        method: 'POST',
        url: '/msg',
        data: payload,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      // TODO: airbrake and support email message
      this.setState({ error: 'Sorry something went wrong!' });
      return;
    }

    await this.emulateProcessing();

    this.setState({
      oneTimeUrl: `${process.env.REACT_APP_BASE_URL}/msg?bin=${uuid};${encryptionKey}`,
      showModal: true,
      error: false,
      copied: false,
    });
  }

  emulateProcessing = async () => {
    this.setState({ isLoading: true });
    await this.sleep(500);
    this.setState({
      isLoading: false,
      message: '',
    });
  }

  handleMsgChange = (e) => {
    this.setState({ message: e.target.value });
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handleNameChange = (e) => {
    this.setState({ referenceName: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  toggleModal = () => {
    this.setState((prevState) => {
      if (prevState.showModal) {
        return {
          message: '',
          oneTimeUrl: null,
          showModal: false,
          error: null,
          isLoading: false,
          copied: false,
          showOptions: false,
        };
      }

      return { showModal: true };
    });
  }

  toggleOptions = () => {
    this.setState((prevState) => {
      if (prevState.showOptions) {
        return {
          ...prevState,
          email: '',
          referenceName: '',
          showOptions: false,
        };
      }

      return {
        ...prevState,
        showOptions: true,
      };
    });
  }

  copyToClipboard = async () => {
    this.setState({ copied: true });
    await this.sleep(500);
    this.setState({ copied: false });
  }

  render() {
    return (
      <Container>
        <CipherAlert
          key={this.state.error}
          message={this.state.error || ''}
          show={!!this.state.error}
          variant="danger"
        />
        <CipherModal
          key={this.state.showModal}
          show={this.state.showModal}
          close={this.toggleModal}
          buttonTxt="I understand"
          heading="One Time Use URL"
          body={(
            <>
              <div className="one-time-warning">
                Warning! This message will self destruct after reading it.
              </div>
              <div className="one-time-url-wrapper">
                <SelectAllInput value={this.state.oneTimeUrl} />
                <CopyToClipboard
                  text={this.state.oneTimeUrl}
                  onCopy={this.copyToClipboard}
                >
                  <Badge variant="info" className="badge">
                    {this.state.copied ? 'Copied.' : 'Copy'}
                  </Badge>
                </CopyToClipboard>
              </div>
            </>
          )}
        />
        <div className="cipher-bin-write-wrapper">
          <p className="new-message">
            New Encrypted Message
          </p>
          <Form>
            <Form.Group controlId="cipherbin.textarea">
              <Form.Label style={{ color: '#ececec', margin: '0px', padding: '0px' }}>
                Encrypted Message Text Area
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="10"
                placeholder="Type your message here..."
                onChange={this.handleMsgChange}
                value={this.state.message}
              />
            </Form.Group>
            <div>
              <label htmlFor="options-check" className="checkbox-label">
                <input
                  type="checkbox"
                  name="options"
                  onChange={this.toggleOptions}
                  id="options-check"
                  checked={this.state.showOptions}
                />
                &nbsp;&nbsp;Display additional options?
              </label>
            </div>
            {this.state.showOptions && (
              <div className="options-wrapper">
                <Form.Group>
                  <Row>
                    <h5 className="options-heading">
                      Receive a notification when your message is destroyed
                    </h5>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>
                        Email to send notification to
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="johndoe@gmail.com"
                        onChange={this.handleEmailChange}
                      />
                    </Col>
                    <Col>
                      <Form.Label>
                        Reference name for this message
                      </Form.Label>
                      <Form.Control
                        type="input"
                        placeholder="Environment variables"
                        onChange={this.handleNameChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <h5 className="options-heading">
                      Create your own password for encryption
                    </h5>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <Form.Label>
                        Password
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="some_super_secret_123_abc"
                        onChange={this.handlePasswordChange}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </div>
            )}
            <div className="button-wrapper">
              <Button
                text="Encrypt"
                onClick={this.handleSubmit}
                disabled={this.state.isLoading || this.state.message === ''}
              >
                {this.state.isLoading ? (
                  <Spinner animation="border" role="status" variant="light" />
                ) : 'Encrypt'}
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    );
  }
}

export default CipherBinWrite;
