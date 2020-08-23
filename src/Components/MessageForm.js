import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import MessageBox from '../Components/MessageBox'
import 'react-phone-input-2/lib/bootstrap.css';
import urlencode from 'urlencode';

function MessageForm() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    let [error, setError] = useState('');
    let link = `https://api.whatsapp.com/send?phone=${phoneNumber}${message && `&text=${urlencode(message)}`}`;

    let handleLinkClick = () => {
        if (validatePhoneNumber() && validateMessage()) {
            window.location.assign(link);
        }
    }

    let validatePhoneNumber = () => {
        // eslint-disable-next-line
        if (phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
            return true;
        }
        else {
            setError("Invalid Phone Number");
            return false;
        }
    }

    let validateMessage = () => {
        if (message.length < 250) {
            return true;
        }
        else {
            setError("Message can contain only upto 250 characters");
            return false;
        }
    }

    return (
        <div className="message-form">
            <div className="form-wrapper">
                <h2>Send Whatsapp Message</h2>
                <p id="error">{error}</p>
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
                />

                <button onClick={handleLinkClick} className="message-btn">Send Message</button>
            </div>
        </div>
    )
}



export default MessageForm;
