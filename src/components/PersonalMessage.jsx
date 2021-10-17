import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';

import MessageBox from './MessageBox';
import 'react-phone-input-2/lib/bootstrap.css';

function MessageForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const link = `https://api.whatsapp.com/send?phone=${phoneNumber}${
    message && `&text=${encodeURIComponent(message)}`
  }`;

  const validatePhoneNumber = () => {
    // eslint-disable-next-line
    if (phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
      return true;
    }
    setError('Invalid Phone Number');
    return false;
  };

  const validateMessage = () => {
    if (message.length < 250) {
      return true;
    }
    setError('Message can contain only upto 250 characters');
    return false;
  };

  const handleLinkClick = () => {
    if (validatePhoneNumber() && validateMessage()) {
      window.location.assign(link);
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Send Personal Message</h2>
      <p id="error">{error}</p>
      <label>
        Phone Number
        <PhoneInput
          name="phone_input"
          country="in"
          value={phoneNumber}
          placeholder="+91 987654321"
          onChange={(phone) => setPhoneNumber(phone)}
        />
      </label>
      <MessageBox
        name="Message"
        placeholder="Message (Optional)"
        value={message}
        onChange={(_message) => setMessage(_message)}
      />

      <button type="submit" onClick={handleLinkClick} className="message-btn">
        Send Message
      </button>
    </div>
  );
}

export default MessageForm;
