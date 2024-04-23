import {ExceptionInterface, ExceptionOptionsInterface} from "./exception-interface"

export class ContextNotFoundException implements ExceptionInterface {
    constructor(options: ExceptionOptionsInterface) {
        this.throws(options)
    }

    throws(options: ExceptionOptionsInterface) {
        // @ts-ignore
        throw new Error("ContextNotFoundException: canvas context not found. (cazan)", options.filename)
    }
}
