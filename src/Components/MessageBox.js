import React from 'react'

function MessageBox({ name, placeholder, value, onChange,setError }) {

    let error= '';

    if(value.length>250){
        error='Message can only contain upto 250 characters';
        setError(error);
    }

    let handleMessageChange = e => {
        onChange(e.target.value);
    }

    return (
        <label>{name}
            <textarea className={`message-box ${error && `msg-error`}`}
                value={value}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleMessageChange} />
        </label>
    )
}

export default MessageBox;
