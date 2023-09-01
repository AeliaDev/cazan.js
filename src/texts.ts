import {CRenderingContext} from "./types/global";
import {TextInterface} from "./types/texts";
import {WrongContextException} from "./exceptions";

export function displayText(options: TextInterface) {
    if(options.type === "fill") {
        "fillText" in options.ctx
            ? options.ctx.fillText(
                options.text,
                options.x,
                options.y,
                options.maxWidth ? options.maxWidth : undefined
            )
            : new WrongContextException({
                filename: "cazan/texts.ts",
                message: "'CanvasRenderingContext2D' for use 'fillText()'"
            })
    } else if(options.type === "stroke") {
        "strokeText" in options.ctx
            ? options.ctx.strokeText(
                options.text,
                options.x,
                options.y,
                options.maxWidth ? options.maxWidth : undefined
            )
            : new WrongContextException({
                filename: "cazan/texts.ts",
                message: "'CanvasRenderingContext2D' for use 'strokeText()'"
            })
    }
}

export function textMeasurement(ctx: CRenderingContext, text: string) {
    "measureText" in ctx
        ? ctx.measureText(text)
        : new WrongContextException({
            filename: "cazan/texts.ts",
            message: "'CanvasRenderingContext2D' for use 'measureText()'"
        })
}
