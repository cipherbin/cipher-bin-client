import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class CipherBin extends Component {
  state = { message: '' }

  handleSubmit = (e) => {
    e.preventDefault();

    // Send to server
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <Container>
        <div style={{ marginTop: '100px' }}>
          <h2>New Encrypted Message</h2>
          <Form onClick={this.handleSubmit}>
            <Form.Group controlId="cipherbin.textarea">
              <Form.Control
                as="textarea"
                rows="10"
                placeholder="Type your message here..."
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              Encrypt
            </Button>
          </Form>
        </div>
      </Container>
    )
  }
}

export default CipherBin;