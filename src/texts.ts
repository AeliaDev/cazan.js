import {Game} from "./game";
import {TextInterface} from "./types/texts";

/**
 * Display text
 *
 * @param game {Game}
 * @param options {LineStyleInterface}
 */
export function displayText(game: Game, options: TextInterface) {
    if(options.type === "fill") {
        game.get_ctx().fillText(
            options.text,
            options.x,
            options.y,
            options.maxWidth ? options.maxWidth : undefined
        )
    } else if(options.type === "stroke") {
        game.get_ctx().strokeText(
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
 * @param game {Game}
 * @param text {string}
 * @returns {TextMetrics}
 */
export function textMeasurement(game: Game, text: string) {
    return game.get_ctx().measureText(text)
}
