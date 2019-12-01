import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import queryString from 'query-string';
import CryptoJS, { AES } from 'crypto-js';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import CipherAlert from '../shared/CipherAlert/CipherAlert';
import './CipherBinRead.css';

class CipherBinRead extends Component {
  state = {
    message: null,
    error: null,
  };

  async componentDidMount() {
    const values = queryString.parse(this.props.location.search).bin;

    if (!values) {
      this.setState({ error: 'Sorry, this message has already been read and was destroyed' });
      return;
    }

    const [uuid, encryptionKey] = values.split(';');

    if (!encryptionKey) {
      this.setState({ error: 'Sorry, this seems to be an invalid link' });
      return;
    }

    let res;

    try {
      res = await axios.get(`/msg?bin=${uuid}`);
    } catch (err) {
      this.setState({ error: 'Sorry something went wrong!' });
      return;
    }

    const message = this.decrypt(res.data.message, encryptionKey);

    this.setState({ message });

    this.props.history.replace('/msg');
  }

  decrypt = (message, encryptionKey) => {
    const bytes = AES.decrypt(message, encryptionKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }

  render() {
    return (
      <Container>
        <CipherAlert
          key={this.state.error}
          message={this.state.error}
          show={!!this.state.error}
          variant="danger"
        />
        {this.state.message && (
          <>
            <div className="warning-message">
              This message was destroyed. If you need to keep it,
              copy it&#39;s contents before navigating away.
            </div>
            <div className="message-wrapper">
              {this.state.message}
            </div>
          </>
        )}
      </Container>
    );
  }
}

export default withRouter(CipherBinRead);

CipherBinRead.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};
