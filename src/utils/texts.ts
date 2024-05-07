import {Game} from "../game"

/**
 * Measure text
 *
 * @param game {Game}
 * @param text {string}
 * @returns {TextMetrics}
 */
export function textMeasurement(game: Game, text: string) {
    return game.getCtx().measureText(text)
}
