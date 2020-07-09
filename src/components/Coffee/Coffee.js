import React, { Component } from 'react';
import { Container, Badge } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Coffee.css';

class Coffee extends Component {
  state = { btc: false, eth: false };

  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  copyToClipboard = async (coin) => {
    this.setState({ [coin]: true });
    await this.sleep(500);
    this.setState({ [coin]: false });
  }

  render() {
    return (
      <Container>
        <div className="coffee-wrapper">
          <div className="row-text">
            Buy me a coffee
          </div>
          <div className="row-text">
            BTC:
            <CopyToClipboard
              text="bc1qssxm04f2rqn8g53t6u7z3hfxk4c7l9nzwdf2f0"
              onCopy={() => this.copyToClipboard('btc')}
            >
              <Badge variant="success" className="donate-badge">
                {this.state.btc ? 'Copied.' : 'Copy'}
              </Badge>
            </CopyToClipboard>
            <span className="crypto-addr">
              bc1qssxm04f2rqn8g53t6u7z3hfxk4c7l9nzwdf2f0
            </span>
          </div>
          <div className="row-text">
            ETH:
            <CopyToClipboard
              text="0x6A9F2C9C571d53d51Afa2DBe2E2D286Afc694A1A"
              onCopy={() => this.copyToClipboard('eth')}
            >
              <Badge variant="success" className="donate-badge">
                {this.state.eth ? 'Copied.' : 'Copy'}
              </Badge>
            </CopyToClipboard>
            <span className="crypto-addr">
              0x6A9F2C9C571d53d51Afa2DBe2E2D286Afc694A1A
            </span>
          </div>
        </div>
      </Container>
    );
  }
}

export default Coffee;
