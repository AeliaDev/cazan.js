import {CRenderingContext} from "./global";

export declare interface TextInterface {
    text: string
    type: string & ("fill" | "stroke")
    x: number
    y: number
    maxWidth?: number
}
