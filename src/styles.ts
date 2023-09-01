import {CRenderingContext} from "./types/global";
import {validateRgbaString} from "./utils/validations";
import {InvalidArgumentException} from "./exceptions/index";

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
