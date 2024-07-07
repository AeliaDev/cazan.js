# Game

## Class

### ``Game``

#### ``constructor(ctx: CRenderingContext, canvas: HTMLCanvasElement, fps: number = 100, config: Config)``

Creates a new instance of ``Game``.

- ``ctx``: CRenderingContext, it's the canvas context.

- ``canvas``: it's the HTML element of the canvas.

- ``fps``: it's the default amount of fps.

- ``config``: it's the configuration of the project.

#### ``setSize(width: number, height: number): void``

Set the dimensions of the canvas.

#### ``getSize(): {width: number, height: number}``

Returns the size of the canvas.

#### ``getCanvas(): HTMLCanvasElement``

Returns the canvas element.

#### ``getCtx(): CRenderingContext``

Returns the context.

#### ``getConfig(): Config``

Returns the configuration.

#### ``clearCanvas(): void``

Clear the canvas.

#### ``update(): void``

Update frames.

#### ``draw(): void``

Draw graphics.

#### ``registerGraphic(graphics: Graphic | (Graphic)[]): void``

Register shapes in the shapes list for frame updating

!!!note
    If an element isn't registered, it won't be actualized on the next frame updating.

!!!note
    The graphics created with the graphic API from Cazan are registred automatically.

#### ``unregisterGraphic(graphicId: number): void``

Use it when you're sure that you don't need this shape anymore. If you just want to hide it prefer `element.hide()`.

!!!warning
    This method will remove the shape from the shapes to redraw at each frame. Be sure before unregister one.

#### ``getGraphics(): (Graphic | null)[]``

Returns the list of current graphics to draw.

#### ``setFps(newFps: number): void``

Set a new FPS.

#### ``getCurrentFps(): number``

Returns the current FPS.

#### ``async getScreenRefreshRate(): Promise<number>``

Returns the user's screen refresh rate.
