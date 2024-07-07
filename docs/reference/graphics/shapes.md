# Shapes

## Classes

### ``Graphic``

#### ``constructor(options: GraphicConstructorInterface)``

Creates a new Graphic instance.

!!!info
    All other classes on this page are extending this class. So every method of ``Graphic`` can be used on them to 
    (except ``private`` method).

#### ``draw(notMandatory?: boolean): void``

Draw the shape, in this function you must put the instructions to draw your shape if you want to create a custom shape.

#### ``destroy(): void``

Destroy the shape. It unregisters the shape from the shapes to draw on each frame so please take care of what you're 
doing. 

#### ``setupStylesForDrawing(): void``

Sets up the drawing styles.

#### ``setDefaultStyles(): void`` (private)

Sets up default styles. Used to set up params that weren't set by the game developer.

#### ``setStyles(styles: GenericGraphicStylesInterface): void``

Set the styles.

#### ``getStyles(): GenericGraphicStylesInterface``

Returns the current style.

#### ``getId(): number``

Returns the graphic's id.

#### ``getGame(): Game``

Returns the graphic's game.

#### ``setPosition(options: {x?: number; y?: number}): void``

Set the position of the graphic.

#### ``getPosition(): Position``

Returns the position of the graphic.

#### ``setDimensions(options: {width?: number; height?: number}): void``

Set the new dimensions of the graphic.

#### ``getDimensions(): Dimensions``

Returns the dimensions of the graphic.

#### ``show(): void``

Displays the shape. In reality, it tells Cazan that he has to draw the shape on the next frame. 

#### ``hide(): void``

Hides the shape. In reality, it tells Cazan that he mustn't to draw the shape on the next frame.

#### ``toggleDisplay(): void``

If the graphic was already displayed, hide it. In the other case, if the shape was hided, display it.

#### ``getDisplayState(): boolean``

Returns ``true`` if the graphic was displayed, ``false`` otherwise.

#### ``_exportToCw(): CwExport``

This is an internal function made for Cazanw plugin.

### ``Circle``

``Circle`` implements ``CurveInterface`` and ``ImageHandlingInterface``.

#### ``constructor(options: CircleConstructorInterface)``

Creates a new instance of ``Circle``.

#### ``setRadius(radius: number): void``

Set the circle's radius.

#### ``getRadius(): number``

Returns the circle's radius.

### ``Ellipse``

``Ellipse`` implements ``CurveInterface``.

#### ``constructor(options: EllipseConstructorInterface)``

Creates a new instance of ``Ellipse``.

#### ``setRadius(options: {x?: number, y?: number}): void``

Set the x radius and the y radius of the ellipse. 

#### ``getRadius(): {x: number, y: number}``

Returns the both radius of the ellipse.

### ``Line``

#### ``constructor(options: LineConstructorInterface)``

Creates a new instance of ``Line``.

### ``Rectangle``

``Rectangle`` implements ``ImageHandlingInterface``.

#### ``constructor(options: RectangleConstructorInterface)``

Creates a new instance of ``Rectangle``.

## Interfaces

### ``CircleConstructorInterface``

- ``game``: Game
- ``position``: Position
- ``radius``: number
- ``styles``: GenericGraphicStylesInterface (optional)
- ``srcImage``: string (optional)
- ``toDisplay``: boolean (optional)
- ``drawingOptions``: CurveDrawingOptionsInterface (optional)

### ``CurveDrawingOptionsInterface``

- ``setImage(image: HTMLImageElement): void``: Put an image on the circle.
- ``getImage(): CanvasImageSource | null``: Returns the current image of the circle.
- ``getImageSource(): string | null``: Returns the current image source of the circle.

### ``CurveInterface``

- ``setDrawingOptions(options: CurveDrawingOptionsInterface): void``: Set the circle's drawing options.
- ``getDrawingOptions(): CurveDrawingOptionsInterface``: Returns the circle's drawing options.

### ``Dimensions``

- ``width``: number, width of the graphic.
- ``height``: number, height of the graphic.

### ``EllipseConstructorInterface``

- ``game``: Game
- ``position``: Position
- ``radiusX``: number
- ``radiusY``: number
- ``styles``: GenericGraphicStylesInterface (optional)
- ``toDisplay``: boolean (optional)
- ``drawingOptions``: CurveDrawingOptionsInterface (optional)

### ``GenericGraphicStylesInterface``

- ``graphic``: GraphicStylesInterface
- ``line``: LineStyleInterface, only for shapes drawn by lines, like Circle, Ellipse or Line.
- ``text``: TextStyleInterface, only for Text

### ``GraphicConstructorInterface``

- ``game``: Game
- ``position``: Position
- ``dimensions``: Dimensions
- ``styles``: GenericGraphicStylesInterface (optional)
- ``toDisplay``: boolean (optional)

### ``GraphicStylesInterface``

- ``color``: string
- ``type``: 'fill' | 'stroke'

### ``ImageHandlingInterface``

- ``setImage(image: CanvasImageSource | string): void``: set the graphic's image.
- ``getImage(): CanvasImageSource | null``: get the graphic's image.
- ``getImageSource(): string | null``: get the graphic's image's source.

### ``LineConstructorInterface``

- ``game``: Game
- ``firstPoint``: Position
- ``secondPoint``: Position
- ``styles``: GenericGraphicStylesInterface (optional)
- ``toDisplay``: boolean (optional)

### ``LineStyleInterface``

- ``width``: number (optional)
- ``cap``: "butt" | "round" | "square" (optional)
- ``join``: "round" | "bevel" | "miter" (optional)
- ``miterLimit``: number (optional)
- ``dash``: [number, number] (optional)
- ``dashOffset``: number (optional)

### ``Position``

- ``x``: number, position on the x-axis.
- ``y``: number, position on the y-axis.

### ``RectangleConstructorInterface``

- ``game``: Game
- ``position``: Position
- ``dimensions``: Dimensions
- ``styles``: GenericGraphicStylesInterface (optional)
- ``srcImage``: string (optional)
- ``toDisplay``: boolean (optional)

### ``TextStyleInterface``

- ``color``: string
- ``font``: string, use it as the CSS property ``font`` (optional)
- ``textAlign``: "start" | "end" | "left" | "right" | "center" (optional)
- ``textBaseline``: "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom" (optional)
- ``direction``: "ltr" | "rtl" | "inherit" (optional)
