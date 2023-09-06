import {ContextNotFoundException} from "./exceptions/index";
import {CRenderingContext} from "./types/global";

/**
 * Setup cazan
 * @param canvasSelector
 * @param context
 * @returns [CRenderingContext | null, HTMLCanvasElement]
 * @throws ContextNotFoundException
 */
export function setup(canvasSelector: string, context: string): ([CRenderingContext | null, HTMLCanvasElement]) | ContextNotFoundException {
    let canvas: HTMLCanvasElement | null = document.querySelector(canvasSelector)
    if(canvas?.getContext) {
        return [canvas.getContext(context) as CRenderingContext, canvas]
    } else {
        return new ContextNotFoundException({filename: "cazan/setup.ts"})
    }
}
