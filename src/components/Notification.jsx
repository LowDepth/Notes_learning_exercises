const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }
  return (
    <>
      <div className={`alert alert-${type} alert-dismissible`} role="alert">
        <div>{message}</div>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Notification;
