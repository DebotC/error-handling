"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCustomError = void 0;
class MyCustomError extends Error {
    constructor(message) {
        super(message ? message : 'Error');
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.MyCustomError = MyCustomError;
//# sourceMappingURL=my-custom-error.js.map