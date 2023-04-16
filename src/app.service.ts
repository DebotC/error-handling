import { MyCustomError } from './my-custom-error';

exports.getSomething = () => {
    throw new MyCustomError();
}