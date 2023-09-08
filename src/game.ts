import {CRenderingContext} from "./types/global";

/**
 * This class is used to manage game's configuration and to pass ctx to functions.
 * @class Game
 * @param {CRenderingContext} ctx
 * @param {HTMLCanvasElement} canvas
 */
export class Game {
    /**
     * Create an instance of Game.
     * @param ctx
     * @param canvas
     */
    constructor(protected ctx: CRenderingContext, protected canvas: HTMLCanvasElement) {
    }

    /**
     * Changes the size of the canvas.
     *
     * WARNING: This method should not be used to change the size of the canvas after the game has started.
     * @param width
     * @param height
     */
    setSize(width: number, height: number) {
        this.canvas.width = width
        this.canvas.height = height
    }

    /**
     * Returns the size of the canvas.
     */
    getSize(): {width: number, height: number} {
        return {width: this.canvas.width, height: this.canvas.height}
    }

    /**
     * Returns the canvas.
     */
    getCanvas(): HTMLCanvasElement {
        return this.canvas
    }

    /**
     * Returns the context.
     */
    getCtx(): CRenderingContext {
        return this.ctx
    }
}
