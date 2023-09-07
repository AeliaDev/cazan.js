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
        game.get_ctx().fillStyle = rgba
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
        game.get_ctx().strokeStyle = rgba
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
    options.cap ? game.get_ctx().lineCap = options.cap : null
    options.width ? game.get_ctx().lineWidth = options.width : null
    options.join ? game.get_ctx().lineJoin = options.join : null
    options.miterLimit ? game.get_ctx().miterLimit = options.miterLimit : null
    options.dash ? game.get_ctx().setLineDash(options.dash) : null
    options.dashOffset ? game.get_ctx().lineDashOffset = options.dashOffset : null
}

/**
 * Set text style.
 *
 * @param game {Game}
 * @param options {TextStyleInterface}
 */
export function setTextStyle(game: Game, options: TextStyleInterface) {
    options.font ? game.get_ctx().font = options.font : null
    options.textAlign ? game.get_ctx().textAlign = options.textAlign : null
    options.textBaseline ? game.get_ctx().textBaseline = options.textBaseline : null
    options.direction ? game.get_ctx().direction = options.direction : null
}
