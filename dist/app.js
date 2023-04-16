"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const MyCustomError = require('./my-custom-error');
const errorHandler = require('./error-handler');
const appService = require('./app.service');
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    //throw new MyCustomError();
    //  throw new Error();
    res.json(appService.getSomething());
    //res.json('Hello world!');
});
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map