const statusMessages = {
  404: "Not found",
};
class RequestError extends Error {
  constructor(status, message = statusMessages[status]) {
    super(message);
    this.status = status;
  }
}

module.exports = RequestError;
