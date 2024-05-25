import {ContextNotFoundException} from "./exceptions/index"
import {CRenderingContext} from "./types/global"
import {Game} from "./game"
import {setKeyboardHandler} from "./events/keyboard"

/**
 * Setup cazan
 * @param canvasSelector
 * @param context
 * @param fps
 * @returns {Game | ContextNotFoundException} -> Game or ContextNotFoundException
 * @throws ContextNotFoundException
 */
export function setup(canvasSelector: string, context: string, fps?: number): Game | ContextNotFoundException {
    let canvas: HTMLCanvasElement | null = document.querySelector(canvasSelector)
    if(canvas?.getContext) {
        setKeyboardHandler({
            on: 'keydown',
            shortcutCallback: (event) => (event.ctrlKey || event.metaKey) && event.key === 'r',
            callback: () => window.location.reload()
        })

        return new Game(canvas.getContext(context) as CRenderingContext, canvas, fps)
    } else {
        return new ContextNotFoundException({filename: "cazan/setup.ts"})
    }
}
