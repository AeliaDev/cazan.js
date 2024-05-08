# Graphics

What would a game library be without a system for draw shapes? Nothing, we presume. In this section you will discover how to use the Cazan graphics' API.

## Reference

This is the parent class of each shape that you can draw with Cazan. Don't hesitate to extend it to create your own shapes.

````ts
class Graphic {
    readonly id!: number

    constructor(options: GraphicConstructorInterface) {}
    
    draw(): void {}

    hide(): void {}

    setupStylesForDrawing(): void {}

    private setDefaultStyles(): void {}

    setStyles(styles: GenericGraphicStylesInterface): void {}

    getStyles(): GenericGraphicStylesInterface | undefined {}
    
    getId(): number {}

    getGame(): Game {}

    setPosition(options: {x?: number; y?: number}): Position {}

    getPosition(): Position {}

    setDimensions(options: {x?: number; y?: number}): void {}

    getDimensions(): Dimensions {}

    toggleDisplay(): void {}

    getDisplayState(): boolean {}

    /**
     * This is an internal function made for cazanw plugin. You don't really have to use it, and even less when you don't have Cazanw configured on your project. 
     */
    _exportToCw(): CwExport {}
}
````

By the way, there's ``GraphicContstructorInterface``.

````ts
interface GraphicConstructorInterface {
    game: Game,
    position: Position,
    dimensions: Dimensions,
    styles?: GenericGraphicStylesInterface,
    toDisplay?: boolean
}
````

Some shapes can handle images on them. If they do, they implement ``ImageHandlingInterface``.

````ts
interface ImageHandlingInterface {
    setImage(image: CanvasImageSource): void
    getImage(): string | null
    getImageSource(): string | number
}
````

Shapes like ``Circle`` or ``Ellipse`` are curved shapes. So they implement ``CurveInterface`` and they have a ``drawOptions: CurveDrawingOptionsInterface`` in params.

````ts
interface CurveInterface {
    setDrawingOptions(options: CurveDrawingOptionsInterface): void
    getDrawingOptions(): CurveDrawingOptionsInterface
}

interface CurveDrawingOptionsInterface {
    startAngle: number
    endAngle: number

    /** for Circle only */
    counterClockWise?: boolean

    /** for Ellipse only */
    rotation?: number
}
````
