import {ContextNotFoundException} from "./exceptions/index";
import {CRenderingContext} from "./types/global";
import {Game} from "./game";
import {setShortcutHandler} from "./events/keyboard";

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
        setShortcutHandler({
            on: 'keydown',
            // @ts-ignore
            shortcutCallback: (event: Event) => (event.ctrlKey || event.metaKey) && event.key === 'r',
            callback: () => window.location.reload()
        })

        return new Game(canvas.getContext(context) as CRenderingContext, canvas)
    } else {
        return new ContextNotFoundException({filename: "cazan/setup.ts"})
    }
}
