import {ExceptionInterface, ExceptionOptionsInterface} from "./exception-interface";

export class WrongContextException implements ExceptionInterface {
    constructor(options: ExceptionOptionsInterface) {
        this.throws(options)
    }

    throws(options: ExceptionOptionsInterface) {
        // @ts-ignore
        throw new Error("WrongContextException: excepted context of type " + options?.message + ". (cazan)", options.filename)
    }
}
