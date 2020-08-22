import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import MessageBox from '../Components/MessageBox'
import 'react-phone-input-2/lib/bootstrap.css';
import urlencode from 'urlencode'

function MessageForm() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    let [error, setError] = useState('');
    let link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${urlencode(message)}`;

    let handleLinkClick = () => {
        if (validatePhoneNumber(phoneNumber)) {
            setError('')
            window.location.assign(link);
        }
        else {
            setError('Invalid phone number');
        }
    }
    return (
        <div className="message-form">
            <h2>Send Message</h2>
            {error && <p>{error}</p>}
            <label>Phone Number
            <PhoneInput
                    country={'in'}
                    value={phoneNumber}
                    placeholder="+91 987654321"
                    onChange={phone => setPhoneNumber(phone)}
                />
            </label>
            <MessageBox
                name="Message"
                placeholder="Message (Optional)"
                value={message}
                onChange={message => setMessage(message)}
                setError={setError}
            />
            <button onClick={handleLinkClick} className="message-btn">Send Message</button>
        </div>
    )
}

let validatePhoneNumber = number => {
    return true;
}

export default MessageForm;
