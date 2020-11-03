import React from 'react';

function MessageBox({ name, placeholder, value, onChange }) {
  let handleMessageChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <label id="message-box-label">
      {name}
      <textarea
        className={'message-box'}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleMessageChange}
      />
    </label>
  );
}

export default MessageBox;
