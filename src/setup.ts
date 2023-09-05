import {ContextNotFoundException} from "./exceptions/index";

export function setup(canvasSelector: string, context: string): ([RenderingContext | null, HTMLCanvasElement]) | ContextNotFoundException {
    let canvas: HTMLCanvasElement | null = document.querySelector(canvasSelector)
    if(canvas?.getContext) {
        return [canvas.getContext(context), canvas]
    } else {
        return new ContextNotFoundException({filename: "cazan/setup.ts"})
    }
}
