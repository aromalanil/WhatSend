import React, { useState } from 'react';
import Alert from './Alert';
import urlencode from 'urlencode';

function MessageList({ stop, phoneNumbers, message }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const incrementIndex = () => {
    if (activeIndex + 1 === phoneNumbers.length) stop();
    setActiveIndex((index) => index + 1);
  };

  const sendMessage = () => {
    let phoneNumber = phoneNumbers[activeIndex];
    let newNumber = phoneNumber.toString().length === 10 ? `+91${phoneNumber}` : phoneNumber;

    const link = `https://api.whatsapp.com/send?phone=${newNumber}${
      message && `&text=${urlencode(message)}`
    }`;
    window.open(link, '_blank');
    incrementIndex();
  };

  const alertMessage = `Send Message to ${phoneNumbers[activeIndex]}`;

  return (
    <Alert
      title="Send Message"
      message={alertMessage}
      onCancel={incrementIndex}
      onCancelAll={stop}
      onConfirm={sendMessage}
    />
  );
}

export default MessageList;
