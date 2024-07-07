import {ContextNotFoundException} from "./exceptions"
import {Config, CRenderingContext} from "./types/global"
import {Game} from "./game"
import {permissions} from "./events"

/**
 * Setup cazan
 * @param canvasSelector
 * @param context
 * @param fps
 * @returns {Game | ContextNotFoundException} -> Game or ContextNotFoundException
 * @throws ContextNotFoundException
 */
export async function setup(
    canvasSelector: string,
    context: string,
    fps?: number
): Promise<Game | ContextNotFoundException> {
    let canvas: HTMLCanvasElement | null = document.querySelector(canvasSelector)
    let config: Config

    if(canvas?.getContext) {
        try {
            config = await (await fetch('/.cazan/config.json')).json()
        } catch (e) {
            console.info("ConfigFileNotFound: cazan's config file not found. Applying default config. (cazan)")
            console.warn("You should set a config file for production! You just have to create a config file " +
                "at `/.cazan/config.json` (cazan)")
            config = {
                name: "MyGame",
                version: "0.1",
                authors: [],
                plugins: []
            }
        }

        if(config.useAutoplayForMultimedia) {
            await permissions.checkAndEnableMultimediaAutoplay()
        }

        return new Game(canvas.getContext(context) as CRenderingContext, canvas, fps, config)
    } else {
        return new ContextNotFoundException({filename: "cazan/setup.ts"})
    }
}
