import React, { useState } from 'react';
import MessageBox from './MessageBox';
import MessageList from './MessageList';

function BroadcastMessage() {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState('');
  const [startMessaging, setStartMessaging] = useState(false);
  const [phoneNumberArray, setPhoneNumberArray] = useState([]);

  const stopMessaging = () => setStartMessaging(false);

  const handleSendMessage = () => {
    setError('');
    try {
      if (phoneNumbers.trim() === '') throw new Error('Phone Numbers cannot be empty');
      if (message.trim() === '') setError('Message cannot be empty');

      const tempArray = [...phoneNumbers.trim().split(',')];
      setPhoneNumberArray(tempArray);
      if (!validatePhoneNumbers(tempArray)) {
        throw new Error('Invalid Phone Numbers');
      } else {
        setStartMessaging(true);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Send Broadcast Messages</h2>
      <p id="error">{error}</p>
      <MessageBox
        small={true}
        name="Phone Numbers"
        placeholder="Enter all mobile numbers separated by comma"
        value={phoneNumbers}
        onChange={(phoneNumbers) => setPhoneNumbers(phoneNumbers)}
      />
      <MessageBox
        small={true}
        name="Message"
        placeholder="Message"
        value={message}
        onChange={(message) => setMessage(message)}
      />

      <button className="message-btn" onClick={handleSendMessage}>
        Start Messaging
      </button>

      {startMessaging && (
        <MessageList stop={stopMessaging} phoneNumbers={phoneNumberArray} message={message} />
      )}
    </div>
  );
}

const validatePhoneNumbers = (phoneNumberArray) => {
  return phoneNumberArray.every((phoneNumber) => {
    // eslint-disable-next-line
    return !!phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
  });
};
export default BroadcastMessage;
