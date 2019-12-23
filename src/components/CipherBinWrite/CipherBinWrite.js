import React, { Component } from 'react';
import {
  Container,
  Form,
  Spinner,
  Badge,
  Col,
  Row,
} from 'react-bootstrap';
import uuidv4 from 'uuid/v4';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CipherModal from '../shared/CipherModal/CipherModal';
import CipherAlert from '../shared/CipherAlert/CipherAlert';
import SelectAllInput from '../shared/SelectAllInput/SelectAllInput';
import Button from '../shared/Button/Button';
import AES256 from '../../utils/aes256/aes256';
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

  randString = (len) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let str = '';

    for (let i = len; i > 0; i -= 1) {
      str += charset[Math.floor(Math.random() * charset.length)];
    }

    return str;
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, referenceName, password } = this.state;
    const encryptionKey = this.randString(32);
    const uuid = uuidv4();
    const cipherText = AES256.encrypt(this.state.message, encryptionKey);
    const payload = {
      uuid,
      email,
      reference_name: referenceName,
      message: cipherText,
      ...(password) && { password },
    };

    try {
      await axios({
        method: 'POST',
        url: '/msg',
        data: payload,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
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

  handleChange = (e, stateKey) => {
    this.setState({ [stateKey]: e.target.value });
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
                onChange={(e) => this.handleChange(e, 'message')}
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
                        onChange={(e) => this.handleChange(e, 'email')}
                      />
                    </Col>
                    <Col>
                      <Form.Label>
                        Reference name for this message
                      </Form.Label>
                      <Form.Control
                        type="input"
                        placeholder="Environment variables"
                        onChange={(e) => this.handleChange(e, 'referenceName')}
                      />
                    </Col>
                  </Row>
                  {/* <Row>
                    <h5 className="options-heading">
                      Create a password as an additional security layer
                    </h5>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <Form.Label>
                        Password
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="secret_abc_123"
                        onChange={(e) => this.handleChange(e, 'password')}
                      />
                    </Col>
                  </Row> */}
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
