import {CRenderingContext} from "./types/global";
import {Shape} from "./shapes";
import {Image} from "./assets";

/**
 * This class is used to manage game's configuration and to pass ctx to functions.
 * @class Game
 * @param {CRenderingContext} ctx
 * @param {HTMLCanvasElement} canvas
 */
export class Game {
    private shapes: (Shape | Image)[] = []
    private fps: number
    private fpsIncrement: number = 0

    /**
     * Create an instance of Game.
     * @param ctx
     * @param canvas
     * @param fps Frames per second
     */
    constructor(protected ctx: CRenderingContext, protected canvas: HTMLCanvasElement, fps: number = 100) {
        this.fps = fps
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

    /**
     * Clears the canvas.
     */
    clearCanvas(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    /**
     * Update frame
     */
    update(): void {
        setInterval(async () => {
            let screenRefreshRate = await this.getScreenRefreshRate()

            if(this.fps > screenRefreshRate) {
                if(this.fpsIncrement >= this.fps/screenRefreshRate) {
                    this.draw()

                    this.fpsIncrement = 0
                    return
                }
                this.fpsIncrement++
            }

            this.draw()
        }, 1000 / this.fps)
    }

    draw(): void {
        this.clearCanvas()
        this.shapes.forEach(shape => {
            shape.display()
        })
    }

    /**
     * Register shapes in the shapes list for frame updating
     * Nota: if a frame isn't registered, it won't be actualized on the next frame updating.
     *
     * @param shapes
     */
    registerShapes(shapes: Shape | Image | (Shape | Image)[]): void {
        if(Array.isArray(shapes)) {
            this.shapes.concat(shapes)
            return
        }
        this.shapes.push(shapes)
    }

    /**
     * to do : implement unregisterShape()
     */

    setFps(newFps: number) {
        this.fps = newFps
    }

    getCurrentFps(): number {
        return this.fps
    }

    /**
     * Returns the user's screen refresh rate.
     * @return {Promise<number>} fps
     */
    async getScreenRefreshRate(): Promise<number> {
        return await new Promise(resolve =>
            requestAnimationFrame(t1 =>
                requestAnimationFrame(t2 => resolve(Math.round(1000 / (t2 - t1))))
            )
        )
    }
}
