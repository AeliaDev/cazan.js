import {CRenderingContext} from "./types/global";
import {TextInterface} from "./types/texts";

/**
 * Display text
 *
 * @param ctx {CRenderingContext}
 * @param options {LineStyleInterface}
 */
export function displayText(ctx: CRenderingContext, options: TextInterface) {
    if(options.type === "fill") {
        ctx.fillText(
            options.text,
            options.x,
            options.y,
            options.maxWidth ? options.maxWidth : undefined
        )
    } else if(options.type === "stroke") {
        ctx.strokeText(
            options.text,
            options.x,
            options.y,
            options.maxWidth ? options.maxWidth : undefined
        )
    }
}

/**
 * Measure text
 *
 * @param ctx {CRenderingContext}
 * @param text {string}
 * @returns {TextMetrics}
 */
export function textMeasurement(ctx: CRenderingContext, text: string) {
    return ctx.measureText(text)
}
