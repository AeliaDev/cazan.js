import {CRenderingContext} from "./types/global";
import {InvalidArgumentException} from "./exceptions/index";
import {LineStyleInterface, TextStyleInterface} from "./types/styles";
import {validateRgbaString} from "./utils/validations";

export function setFill(ctx: CRenderingContext, rgba: string) {
    const isValidRgba = validateRgbaString(rgba)
    if(isValidRgba) {
        if ("fillStyle" in ctx) {
            ctx.fillStyle = rgba
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
                : console.log('err')
        )
        : null
    options.join
        ? (
            "lineJoin" in ctx ?
                ctx.lineJoin = options.join
                : console.log('err')
        )
        : null
    options.miterLimit
        ? (
            "miterLimit" in ctx
                ? ctx.miterLimit = options.miterLimit
                : console.log(('err'))
        )
        : null
    options.dash
        ? (
            "setLineDash" in ctx
                ? ctx.setLineDash(options.dash)
                : console.log('err')
        )
        : null
    options.dashOffset
        ? (
            "lineDashOffset" in ctx
                ? ctx.lineDashOffset = options.dashOffset
                : console.log(('err'))
        )
        : null
}

export function setTextStyle(ctx: CRenderingContext, options: TextStyleInterface) {
    // TODO: refacto this
    options.font
        ? (
            "font" in ctx
                ? ctx.font = options.font
                : console.log('err')
        )
        : null
    options.textAlign
        ? (
            "textAlign" in ctx
                ? ctx.textAlign = options.textAlign
                : console.log('err')
        )
        : null
    options.textBaseline
        ? (
            "textBaseline" in ctx
                ? ctx.textBaseline = options.textBaseline
                : console.log('err')
        )
        : null
    options.direction
        ? (
            "direction" in ctx
                ? ctx.direction = options.direction
                : console.log('err')
        )
        : null
}
