import React from 'react';
import { Container } from 'react-bootstrap';
import './HowItWorks.css';

const HowItWorks = () => (
  <Container>
    <div className="how-it-works-wrapper">
      <h3>How it works</h3>
      <p>
        cipherb.in is a free message encryption service that allows you to create messages that
        can only be read once before they&#39;re destroyed. No one other than you and the
        recipient can read the message. This includes cipherb.in!
      </p>
      <p>
        Type in your message and click &quot;encrypt&quot;. We provide you with a one time use
        link for reading the message. As soon as anyone opens the link and clicks &quot;Read
        Now&quot;, it is destroyed.
      </p>
      <hr />
      <h3>Technically how it works</h3>
      <p>
        The message is encrypted with Javascript in your browser using 256 bit AES
        encryption. AES allows us to use a passphrase for encrypting content. cipherb.in
        generates a random 10 character string to use as the passphrase (you also
        have the option to provide your own passphrase).
      </p>
      <p>
        The encrypted message is then sent to our servers with a randomly generated v4
        uuid. This means even cipherb.in servers can not read your message. The
        generated link has a query param with the uuid and the passphrase for decrypting
        the message. Again, our servers do not see that passphrase at any point.
      </p>
      <p>
        When someone visits the link cipherb.in makes a request for the encrypted
        message using it&#39;s uuid. Our servers return the message and immediately
        destroy it. When the message is loaded on the client, your browser uses the
        passphrase to decrypt the message, rendering it in plain text. If you
        navigate away, refresh, visit the link again, etc you will see an error
        explaining that the message has already been read and destroyed.
      </p>
      <hr />
      <h3>FAQs</h3>
    </div>
  </Container>
);

export default HowItWorks;
