import {CRenderingContext} from "./types/global";
import {TextInterface} from "./types/texts";

export function displayText(options: TextInterface) {
    if(options.type === "fill") {
        options.ctx.fillText(
            options.text,
            options.x,
            options.y,
            options.maxWidth ? options.maxWidth : undefined
        )
    } else if(options.type === "stroke") {
        options.ctx.strokeText(
            options.text,
            options.x,
            options.y,
            options.maxWidth ? options.maxWidth : undefined
        )
    }
}

export function textMeasurement(ctx: CRenderingContext, text: string) {
    ctx.measureText(text)
}
