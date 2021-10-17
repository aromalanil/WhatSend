function Alert({ title, message, onCancel, onCancelAll, onConfirm }) {
  return (
    <>
      <div className="alert">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="btn-list">
          <button type="button" onClick={onCancel} className="alert-btn">
            Cancel
          </button>
          <button type="button" onClick={onCancelAll} className="alert-btn">
            Cancel All
          </button>
          <button type="button" onClick={onConfirm} className="alert-btn primary">
            Confirm
          </button>
        </div>
      </div>
      <div className="overlay" />
    </>
  );
}

export default Alert;
