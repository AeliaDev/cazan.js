# FPS handling

You can decide to set a fix FPS rate:

````js
game.setFps(60)
````

!!!note
    If you set a FPS rate higher than the user's screen refresh rate, Cazan will only draw one frame out of FPS/screen refresh rate (the nearest greater integer of this ratio). 

But you can decide to adapt your game's FPS rate to the current user's screen refresh rate:

````js
game.setFps(await game.getScreenRefreshRate())
````


## Reference

This is the typing of the part of ``Game`` about FPS handling.

````ts
class Game {
    private fps: number
    private fpsIncrement: number = 0

    /**
     * Create an instance of Game.
     * @param ctx
     * @param canvas
     * @param fps Frames per second
     */
    constructor(
        protected ctx: CRenderingContext,
        protected canvas: HTMLCanvasElement,
        fps: number = 100
    ) {}

    setFps(newFps: number): void {}

    getCurrentFps(): number {}

    /**
     * Returns the user's screen refresh rate.
     * @return {Promise<number>} fps
     */
    async getScreenRefreshRate(): Promise<number> {}
}
````
