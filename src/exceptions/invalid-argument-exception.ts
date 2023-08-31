import {ExceptionInterface, ExceptionOptionsInterface} from "./exception-interface";

export class InvalidArgumentException implements ExceptionInterface {
    constructor(options: ExceptionOptionsInterface) {
        this.throws(options)
    }

    throws(options: ExceptionOptionsInterface) {
        // @ts-ignore
        throw new Error("InvalidArgumentException: " + options?.message + ". (cazan)", options.filename)
    }
}
