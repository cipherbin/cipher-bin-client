import React, { Component } from 'react';
import {
  Container,
  Form,
  Spinner,
  Badge,
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
    oneTimeUrl: null,
    showModal: false,
    error: null,
    isLoading: false,
    copied: false,
  };

  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  handleSubmit = async (e) => {
    e.preventDefault();

    const encryptionKey = Math.random().toString(36).slice(-10);
    const uuid = uuidv4();
    const cipherText = AES.encrypt(this.state.message, encryptionKey).toString();
    const payload = { uuid, message: cipherText };

    try {
      await axios.post('/msg', payload);
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

  handleChange = (e) => {
    this.setState({ message: e.target.value });
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
        };
      }

      return { showModal: true };
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
              <Form.Control
                as="textarea"
                rows="10"
                placeholder="Type your message here..."
                onChange={this.handleChange}
                value={this.state.message}
              />
            </Form.Group>
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
