import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import queryString from 'query-string';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import CipherAlert from '../shared/CipherAlert/CipherAlert';
import Button from '../shared/Button/Button';
import AES256 from '../../utils/aes256/aes256';
import './CipherBinRead.css';

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
      if (err.response && err.response.data) {
        this.setState({ error: err.response.data.message });
        this.props.history.replace('/msg');
        return;
      }

      this.setState({ error: 'Sorry, there was an error!' });
      this.props.history.replace('/msg');

      return;
    }

    const message = AES256.decrypt(res.data.message, encryptionKey);

    this.setState({ message });
    this.props.history.replace('/msg');
  }

  createYourOwn = () => {
    this.props.history.push('/');
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
        <div className="buttons">
          <Button
            text="Create your own"
            onClick={this.createYourOwn}
          />
        </div>
      </Container>
    );
  }
}

export default withRouter(CipherBinRead);

CipherBinRead.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};
