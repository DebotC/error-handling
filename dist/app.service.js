"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_custom_error_1 = require("./my-custom-error");
exports.getSomething = () => {
    console.log('get something');
    throw new my_custom_error_1.MyCustomError();
    return 'Hello world';
};
//# sourceMappingURL=app.service.js.map