export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  static notFound(message: string) {
    return new ApiError(404, message);
  }

  static badRequest(message: string) {
    return new ApiError(400, message);
  }

  static unprocessableContent(message: string) {
    return new ApiError(422, message);
  }
}
