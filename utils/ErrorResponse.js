class ErrorResponse extends Error {
  constructor(msg, status, name) {
    super(msg);
    this.statusCode = status;
    this.name = name;
  }
}

export default ErrorResponse;
