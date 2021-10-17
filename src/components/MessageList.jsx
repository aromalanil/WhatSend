import { useState } from 'react';
import Alert from './Alert';

function MessageList({ stop, phoneNumbers, message }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const incrementIndex = () => {
    if (activeIndex + 1 === phoneNumbers.length) stop();
    setActiveIndex((index) => index + 1);
  };

  const sendMessage = () => {
    const phoneNumber = phoneNumbers[activeIndex];
    const newNumber = phoneNumber.toString().length === 10 ? `+91${phoneNumber}` : phoneNumber;

    const link = `https://api.whatsapp.com/send?phone=${newNumber}${
      message && `&text=${encodeURIComponent(message)}`
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
