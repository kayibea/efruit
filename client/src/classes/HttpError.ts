export default class HttpError extends Error {
  private code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }

  getMsg() {
    return this.message;
  }

  getCode() {
    return this.code;
  }
}
