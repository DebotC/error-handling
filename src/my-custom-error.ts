export class MyCustomError extends Error {
    constructor(message?: string) {
      super(message? message : 'Error');
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  }
