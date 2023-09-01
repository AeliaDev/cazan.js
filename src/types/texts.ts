import {CRenderingContext} from "./global";

export declare interface TextInterface {
    ctx: CRenderingContext
    text: string
    type: string & ("fill" | "stroke")
    x: number
    y: number
    maxWidth?: number
}
