import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import githubLogo from '../../github_logo_white.png';
import cipherBinLogo from '../../cipher_bin_logo.png';
import './NavigationBar.css';

const NavigationBar = ({ history }) => {
  const handleClick = (route) => {
    history.push(route);
  };

  return (
    <div className="nav-bar-wrapper">
      <Container className="nav-bar-container">
        <div
          tabIndex="0"
          onClick={() => handleClick('/')}
          onKeyPress={() => handleClick('/')}
          role="button"
          className="brand"
        >
          <img
            className="cipher-bin-logo"
            src={cipherBinLogo}
            alt="Link to source code on Github"
          />
          <span className="cipher-bin-brand-name">
            cipherb.in
          </span>
        </div>
        <div className="nav-right-side">
          <div
            tabIndex="-1"
            onClick={() => handleClick('/how-it-works')}
            onKeyPress={() => handleClick('/how-it-works')}
            role="button"
            className="links"
          >
            How does it work?
          </div>
          <div className="github-wrapper">
            <a
              href="https://github.com/bradford-hamilton/cipher-bin-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="github-logo"
                src={githubLogo}
                alt="Link to source code on Github"
              />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default withRouter(NavigationBar);

NavigationBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
