// custom error class for API Failure
export class HttpError extends Error {
  constructor(message) {
    super(message);
    this.errName = "HttpError";
    this.statusCode = 404;
  }
  displayError() {
    console.error(this.errName);
    console.error(this.statusCode);
    console.error(this.message);
  }
}
