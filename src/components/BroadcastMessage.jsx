import { useState } from 'react';
import MessageBox from './MessageBox';
import MessageList from './MessageList';

const getPhoneNumberArray = (phoneNumbers) => {
  const phoneNumbersArray = phoneNumbers.split(',').map((number) => {
    const phoneNumber = number.replace(/^\s+|\s+$/g, '');
    // eslint-disable-next-line
    if (!!phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
      return phoneNumber;
    }
    throw new Error('Invalid Phone Numbers');
  });

  return phoneNumbersArray;
};

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
      if (message.trim() === '') throw new Error('Message cannot be empty');

      setPhoneNumberArray(getPhoneNumberArray(phoneNumbers));

      setStartMessaging(true);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Send Broadcast Messages</h2>
      <p id="error">{error}</p>
      <MessageBox
        small
        name="Phone Numbers"
        placeholder="Enter all mobile numbers separated by comma"
        value={phoneNumbers}
        onChange={(_phoneNumbers) => setPhoneNumbers(_phoneNumbers)}
      />
      <MessageBox
        small
        name="Message"
        placeholder="Message"
        value={message}
        onChange={(_message) => setMessage(_message)}
      />

      <button type="submit" className="message-btn" onClick={handleSendMessage}>
        Start Messaging
      </button>

      {startMessaging && (
        <MessageList stop={stopMessaging} phoneNumbers={phoneNumberArray} message={message} />
      )}
    </div>
  );
}

export default BroadcastMessage;
