import {ContextNotFoundException} from "./exceptions/index";
import {CRenderingContext} from "./types/global";

export function setup(canvasSelector: string, context: string & ("2d" | "webgl")): (CRenderingContext | null) | ContextNotFoundException {
    let canvas: HTMLCanvasElement | null = document.querySelector(canvasSelector)
    if(canvas?.getContext) {
        return canvas.getContext(context) as CRenderingContext
    } else {
        return new ContextNotFoundException({filename: "cazan/setup.ts"})
    }
}
