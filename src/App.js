import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

function App() {

    const [phoneNumber, setPhoneNumber] = useState('');
    let [error, setError] = useState('');
    let link = `https://api.whatsapp.com/send?phone=+${phoneNumber}`;

    let handleLinkClick = (e) => {
        if (validatePhoneNumber(phoneNumber)) {
            setError('')
            window.location.assign(link);
        }
        else{
            setError('Invalid phone number')
        }
    }

    return (
        <div>
            <h1>Hello</h1>
            {error && <p>{error}</p>}
            <PhoneInput
                country={'in'}
                value={phoneNumber}
                placeholder="+91 987654321"
                onChange={phone => setPhoneNumber(phone)}
            />
            <button onClick={handleLinkClick}>Link</button>
        </div>
    )
}

let validatePhoneNumber = number => {
    return true;
}

export default App
