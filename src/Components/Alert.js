import React from 'react';

function Alert({ title, message, onCancel, onCancelAll, onConfirm }) {
  return (
    <>
      <div className="alert">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="btn-list">
          <button onClick={onCancel} className="alert-btn">
            Cancel
          </button>
          <button onClick={onCancelAll} className="alert-btn">
            Cancel All
          </button>
          <button onClick={onConfirm} className="alert-btn primary">
            Confirm
          </button>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
}

export default Alert;
