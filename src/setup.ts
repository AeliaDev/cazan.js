import {Game} from "./game";
import {ContextNotFoundException} from "./exceptions";
import {CRenderingContext} from "./types/global";

/**
 * Setup cazan
 * @param canvasSelector
 * @param context
 * @returns {Game | ContextNotFoundException} -> Game or ContextNotFoundException
 * @throws ContextNotFoundException
 */
export function setup(canvasSelector: string, context: string): Game | ContextNotFoundException {
    let canvas: HTMLCanvasElement | null = document.querySelector(canvasSelector)
    if(canvas?.getContext) {
        return new Game(canvas.getContext(context) as CRenderingContext, canvas)
    } else {
        return new ContextNotFoundException({filename: "cazan/setup.ts"})
    }
}
