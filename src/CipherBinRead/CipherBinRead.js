import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import queryString from 'query-string';
import CryptoJS, { AES } from 'crypto-js';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class CipherBinRead extends Component {
  state = {
    message: null,
    error: null,
  };

  async componentDidMount() {
    const values = queryString.parse(this.props.location.search).bin;

    if (!values) {
      this.setState({ error: 'Sorry, this seems to be an invalid link' });
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
      // TODO: airbrake and support email message
      this.setState({ error: 'Sorry something went wrong!' });
      return;
    }

    const message = this.decrypt(res.data.message, encryptionKey);

    this.setState({ message });
  }

  decrypt = (message, encryptionKey) => {
    const bytes = AES.decrypt(message, encryptionKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }

  render() {
    return (
      <Container>
        <div style={{ marginTop: '100px' }}>
          Read Your Message
        </div>
        {this.state.message && (
          <div style={{ marginTop: '100px' }}>
            {this.state.message}
          </div>
        )}
      </Container>
    );
  }
}

export default withRouter(CipherBinRead);

CipherBinRead.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};
