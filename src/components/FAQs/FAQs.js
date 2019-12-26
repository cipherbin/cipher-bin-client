import React from 'react';
import { Container } from 'react-bootstrap';
import './FAQs.css';

const FAQs = () => (
  <Container>
    <div className="faqs-wrapper">
      <h3 className="faq-header">
        Frequently Asked Questions
      </h3>
      <h5 className="faq-question">
        How secure is cipherbin?
      </h5>
      <p className="faq-answer section-indent-twenty">
        cipherbin uses only HTTPS, meaning any data transferred to or from the server
        is encrypted. All messages are encrypted using 256-bit AES encryption before
        being stored on the server and the key to decrypt it is contained in the URL.
        This URL is not stored on the server, so only the link can decrypt the messages.
        Once the message is viewed, the encrypted messages are destroyed from the system.
        Extremely secure.
      </p>
      <h5 className="faq-question">
        How are the messages stored before being read?
      </h5>
      <p className="faq-answer section-indent-twenty">
        The messages are encrypted using 256-bit AES encryption and put into a database.
      </p>
      <h5 className="faq-question">
        Can I retrieve a note after it has been read?
      </h5>
      <p className="faq-answer section-indent-twenty">
        No. It is removed from the system after being displayed once.
      </p>
      <h5 className="faq-question">
        Is it possible to see a recently read note using browser history, the back button,
        or the recently closed tabs feature?
      </h5>
      <p className="faq-answer section-indent-twenty">
        No. The note self-destructs after being read; there is no way to re-read it once it
        has been read.
      </p>
      <h5 className="faq-question">
        Can you read the messages?
      </h5>
      <p className="faq-answer section-indent-twenty">
        No. The messages are encrypted using a key that is never stored on the server.
        Only the valid URL can display the messages. Once the messages are viewed the
        encrypted messages are removed from the system and the link can not be viewed
        again.
      </p>
      <h5 className="faq-question">
        How do I know the note has been read?
      </h5>
      <p className="faq-answer section-indent-twenty">
        You can opt in to receive a read receipt email. Click on
        <code>Display additional options?</code> to enter an email address
        when creating a message to receive a email notifying you the note has been
        read. You can also enter a reference name to keep track of the note if
        sending multiple URL&apos;s. The email address is encrypted in the
        same fashion as messages and deleted upon the note being viewed.
      </p>
      <h5 className="faq-question">
        But this is what public/private key (asymmetric) cryptography is for? Why not use PGP?
      </h5>
      <p className="faq-answer section-indent-twenty">
        Agreed. If you and your recipient can use asymmetric cryptography (like PGP)
        then definitely do so. But most people using this service do not want to deal
        with that! This is easy enough for anyone to use without the knowledge of asymmetric
        cryptography.
      </p>
      <h5 className="faq-question">
        How much time are unread notes stored on your servers?
      </h5>
      <p className="faq-answer section-indent-twenty">
        After 30 days all unread notes are automatically deleted.
      </p>
    </div>
  </Container>
);

export default FAQs;
