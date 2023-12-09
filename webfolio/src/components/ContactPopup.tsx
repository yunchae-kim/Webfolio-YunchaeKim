import '../styles/ContactPopup.css';

import React, { FC } from 'react';

import { decodeEmail } from '../utils/emailObfuscation';

interface ContactPopupProps {
  onClose: () => void;
  onCopyEmail: () => void;
  encodedEmail: string;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

const ContactPopup: FC<ContactPopupProps> = ({ onClose, onCopyEmail, encodedEmail, buttonRef }) => {
  return (
    <div className="contact__popup">
      <p>{decodeEmail(encodedEmail)}</p>
      <button onClick={onClose}>Close</button>
      <button ref={buttonRef} onClick={onCopyEmail}>Copy to Clipboard</button>
    </div>
  );
};

export default ContactPopup;
