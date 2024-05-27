import {ContextNotFoundException} from "./exceptions/index"
import {Config, CRenderingContext} from "./types/global"
import {Game} from "./game"

/**
 * Setup cazan
 * @param canvasSelector
 * @param context
 * @param fps
 * @param cAssetsPath
 * @returns {Game | ContextNotFoundException} -> Game or ContextNotFoundException
 * @throws ContextNotFoundException
 */
export async function setup(
    canvasSelector: string,
    context: string,
    fps?: number,
    cAssetsPath = '/.cazan/config.json'
): Promise<Game | ContextNotFoundException> {
    let canvas: HTMLCanvasElement | null = document.querySelector(canvasSelector)
    let config: Config

    if(canvas?.getContext) {
        try {
            config = await (await fetch(cAssetsPath)).json()
        } catch (e) {
            console.info("ConfigFileNotFound: cazan's config file not found. Applying default config. (cazan)")
            console.warn("You should set a config file for production! (cazan)")
            config = {
                name: "MyGame",
                version: "0.1",
                author: "john doe",
                plugins: []
            }
        }

        return new Game(canvas.getContext(context) as CRenderingContext, canvas, fps, config)
    } else {
        return new ContextNotFoundException({filename: "cazan/setup.ts"})
    }
}
