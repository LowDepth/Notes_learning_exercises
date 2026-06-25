function Button({ onClick, text, type = "button", className = "", form }) {
  return (
    <button
      type={type}
      className={`btn btn-primary me-2 ${className}`}
      onClick={onClick}
      form={form}
    >
      {text}
    </button>
  );
}

export default Button;
