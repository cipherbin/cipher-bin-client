import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './HowItWorks.css';

const HowItWorks = () => (
  <Container>
    <div className="how-it-works-wrapper">
      <h4>How it works</h4>
      <p className="section-indent-twenty">
        cipherbin is a free and open source message encryption service that allows you
        to share encrypted messages safely via a link. As soon as your message is opened,
        it is immediately destoyed and the link is void. Note: Messages are encrypted before
        being sent to our servers, so even cipherbin can&#39;t see them.
      </p>
      <hr />
      <h4>How to use it</h4>
      <p className="section-indent-twenty">
        Type in your message and click &quot;encrypt&quot;. A one time use
        link is generated for reading the message. As soon as anyone opens
        the link to read it, it is destroyed. For instructions around using
        the CLI, jump over to the <Link to="/cli">CLI Docs</Link>
      </p>
      <hr />
      <h4>Under the hood</h4>
      <p className="section-indent-twenty">
        The message is encrypted with Javascript in your browser using 256 bit AES
        encryption. AES allows us to use a passphrase for encrypting content. cipherbin
        generates a random 10 character string to use as the passphrase.
      </p>
      <p className="section-indent-twenty">
        The encrypted message is then sent to our servers (even cipherbin cannot read
        your message) with a randomly generated v4 uuid. This is intended to drastically
        reduce the chance of ending up at that URL if you have not been given the link. The
        generated link has a query param with the uuid and the passphrase for decrypting
        the message. Our servers also do not see that passphrase at any point.
      </p>
      <p className="section-indent-twenty">
        When someone visits the link cipherbin makes a request for the encrypted
        message using it&#39;s uuid. Our servers return the message and immediately
        destroy it. When your browser receives the message, it uses the passphrase
        from the URL to decrypt the message, rendering it in plain text. If you
        navigate away, refresh, visit the link again, etc you will see an error
        explaining that the message has already been read and destroyed.
      </p>
    </div>
  </Container>
);

export default HowItWorks;
