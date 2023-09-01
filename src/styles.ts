import {CRenderingContext} from "./types/global";
import {InvalidArgumentException, WrongContextException} from "./exceptions/index";
import {LineStyleInterface, TextStyleInterface} from "./types/styles";
import {validateRgbaString} from "./utils/validations";

export function setFill(ctx: CRenderingContext, rgba: string) {
    const isValidRgba = validateRgbaString(rgba)
    if(isValidRgba) {
        if ("fillStyle" in ctx) {
            ctx.fillStyle = rgba
        } else {
            new WrongContextException({
                filename: "cazan/styles.ts",
                message: "'CanvasRenderingContext2D' for use 'fillStyle'"
            })
        }
    } else {
        new InvalidArgumentException({filename: "cazan/styles.ts", message: `invalid RGBA string : ${rgba}`})
    }
}

export function setStroke(ctx: CRenderingContext, rgba: string) {
    const isValidRgba = validateRgbaString(rgba)
    if(isValidRgba) {
        if ("fillStyle" in ctx) {
            ctx.strokeStyle = rgba
        } else {
            new WrongContextException({
                filename: "cazan/styles.ts",
                message: "'CanvasRenderingContext2D' for use 'strokeStyle'"
            })
        }
    } else {
        new InvalidArgumentException({filename: "cazan/styles.ts", message: `invalid RGBA string : ${rgba}`})
    }
}

export function setLineStyle(ctx: CRenderingContext, options: LineStyleInterface) {
    // TODO: refacto this
    options.width ? ctx.lineWidth = options.width : null
    options.cap
        ? (
            "lineCap" in ctx
                ? ctx.lineCap = options.cap
                : new WrongContextException({
                    filename: "cazan/styles.ts",
                    message: "'CanvasRenderingContext2D' for use 'lineCap'"
                })
        )
        : null
    options.join
        ? (
            "lineJoin" in ctx ?
                ctx.lineJoin = options.join
                : new WrongContextException({
                    filename: "cazan/styles.ts",
                    message: "'CanvasRenderingContext2D' for use 'lineJoin'"
                })
        )
        : null
    options.miterLimit
        ? (
            "miterLimit" in ctx
                ? ctx.miterLimit = options.miterLimit
                : new WrongContextException({
                    filename: "cazan/styles.ts",
                    message: "'CanvasRenderingContext2D' for use 'miterLimit'"
                })
        )
        : null
    options.dash
        ? (
            "setLineDash" in ctx
                ? ctx.setLineDash(options.dash)
                : new WrongContextException({
                    filename: "cazan/styles.ts",
                    message: "'CanvasRenderingContext2D' for use 'setLineDash()'"
                })
        )
        : null
    options.dashOffset
        ? (
            "lineDashOffset" in ctx
                ? ctx.lineDashOffset = options.dashOffset
                : new WrongContextException({
                    filename: "cazan/styles.ts",
                    message: "'CanvasRenderingContext2D' for use 'lineDashOffset'"
                })
        )
        : null
}

export function setTextStyle(ctx: CRenderingContext, options: TextStyleInterface) {
    // TODO: refacto this
    options.font
        ? (
            "font" in ctx
                ? ctx.font = options.font
                : new WrongContextException({
                    filename: "cazan/styles.ts",
                    message: "'CanvasRenderingContext2D' for use 'font'"
                })
        )
        : null
    options.textAlign
        ? (
            "textAlign" in ctx
                ? ctx.textAlign = options.textAlign
                : new WrongContextException({
                    filename: "cazan/styles.ts",
                    message: "'CanvasRenderingContext2D' for use 'textAlign'"
                })
        )
        : null
    options.textBaseline
        ? (
            "textBaseline" in ctx
                ? ctx.textBaseline = options.textBaseline
                : new WrongContextException({
                    filename: "cazan/styles.ts",
                    message: "'CanvasRenderingContext2D' for use 'textBaseline'"
                })
        )
        : null
    options.direction
        ? (
            "direction" in ctx
                ? ctx.direction = options.direction
                : new WrongContextException({
                    filename: "cazan/styles.ts",
                    message: "'CanvasRenderingContext2D' for use 'direction'"
                })
        )
        : null
}
