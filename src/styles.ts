import {Game} from "./game";
import {InvalidArgumentException} from "./exceptions";
import {LineStyleInterface, TextStyleInterface} from "./types/styles";
import {validateRgbaString} from "./utils/validations";

/**
 * Set fill for drawing shapes.
 *
 * @param game {Game}
 * @param rgba {string} -> regex verification : rgba(XXX,XXX,XXX,X.XXX)
 * @throws InvalidArgumentException
 */
export function setFill(game: Game, rgba: string) {
    const isValidRgba = validateRgbaString(rgba)
    if(isValidRgba) {
        game.getCtx().fillStyle = rgba
    } else {
        new InvalidArgumentException({filename: "cazan/styles.ts", message: `invalid RGBA string : ${rgba}`})
    }
}

/**
 * Set stroke for drawing shapes.
 *
 * @param game {Game}
 * @param rgba {string} -> regex verification : rgba(XXX,XXX,XXX,X.XXX)
 * @throws InvalidArgumentException
 */
export function setStroke(game: Game, rgba: string) {
    const isValidRgba = validateRgbaString(rgba)
    if(isValidRgba) {
        game.getCtx().strokeStyle = rgba
    } else {
        new InvalidArgumentException({filename: "cazan/styles.ts", message: `invalid RGBA string : ${rgba}`})
    }
}

/**
 * Set line style.
 *
 * @param game {Game}
 * @param options {LineStyleInterface}
 */
export function setLineStyle(game: Game, options: LineStyleInterface) {
    options.cap ? game.getCtx().lineCap = options.cap : null
    options.width ? game.getCtx().lineWidth = options.width : null
    options.join ? game.getCtx().lineJoin = options.join : null
    options.miterLimit ? game.getCtx().miterLimit = options.miterLimit : null
    options.dash ? game.getCtx().setLineDash(options.dash) : null
    options.dashOffset ? game.getCtx().lineDashOffset = options.dashOffset : null
}

/**
 * Set text style.
 *
 * @param game {Game}
 * @param options {TextStyleInterface}
 */
export function setTextStyle(game: Game, options: TextStyleInterface) {
    options.font ? game.getCtx().font = options.font : null
    options.textAlign ? game.getCtx().textAlign = options.textAlign : null
    options.textBaseline ? game.getCtx().textBaseline = options.textBaseline : null
    options.direction ? game.getCtx().direction = options.direction : null
}
