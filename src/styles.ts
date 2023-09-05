import {CRenderingContext} from "./types/global";
import {InvalidArgumentException} from "./exceptions/index";
import {LineStyleInterface, TextStyleInterface} from "./types/styles";
import {validateRgbaString} from "./utils/validations";

export function setFill(ctx: CRenderingContext, rgba: string) {
    const isValidRgba = validateRgbaString(rgba)
    if(isValidRgba) {
        ctx.fillStyle = rgba
    } else {
        new InvalidArgumentException({filename: "cazan/styles.ts", message: `invalid RGBA string : ${rgba}`})
    }
}

export function setStroke(ctx: CRenderingContext, rgba: string) {
    const isValidRgba = validateRgbaString(rgba)
    if(isValidRgba) {
        ctx.strokeStyle = rgba
    } else {
        new InvalidArgumentException({filename: "cazan/styles.ts", message: `invalid RGBA string : ${rgba}`})
    }
}

export function setLineStyle(ctx: CRenderingContext, options: LineStyleInterface) {
    options.cap ? ctx.lineCap = options.cap : null
    options.width ? ctx.lineWidth = options.width : null
    options.join ? ctx.lineJoin = options.join : null
    options.miterLimit ? ctx.miterLimit = options.miterLimit : null
    options.dash ? ctx.setLineDash(options.dash) : null
    options.dashOffset ? ctx.lineDashOffset = options.dashOffset : null
}

export function setTextStyle(ctx: CRenderingContext, options: TextStyleInterface) {
    options.font ? ctx.font = options.font : null
    options.textAlign ? ctx.textAlign = options.textAlign : null
    options.textBaseline ? ctx.textBaseline = options.textBaseline : null
    options.direction ? ctx.direction = options.direction : null
}
