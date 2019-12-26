import React from 'react';
import { Container } from 'react-bootstrap';
import './HowItWorks.css';

const HowItWorks = () => (
  <Container>
    <div className="how-it-works-wrapper">
      <h4>How it works</h4>
      <p className="section-indent-twenty">
        cipherb.in is a free and open source message encryption service that allows you
        to create messages that can only be read once before they&#39;re destroyed. No one
        other than you and the recipient can read the message. This includes cipherb.in!
      </p>
      <p className="section-indent-twenty">
        Type in your message and click &quot;encrypt&quot;. We provide you with a one time use
        link for reading the message. As soon as anyone opens the link and clicks &quot;Read
        Now&quot;, it is destroyed.
      </p>
      <hr />
      <h4>Under the hood</h4>
      <p className="section-indent-twenty">
        The message is encrypted with Javascript in your browser using 256 bit AES
        encryption. AES allows us to use a passphrase for encrypting content. cipherb.in
        generates a random 10 character string to use as the passphrase (you also
        have the option to provide your own passphrase).
      </p>
      <p className="section-indent-twenty">
        The encrypted message is then sent to our servers with a randomly generated v4
        uuid. This means even cipherb.in servers can not read your message. The
        generated link has a query param with the uuid and the passphrase for decrypting
        the message. Again, our servers do not see that passphrase at any point.
      </p>
      <p className="section-indent-twenty">
        When someone visits the link cipherb.in makes a request for the encrypted
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
