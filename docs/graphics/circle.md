# Circle

We'll use the ``cazan.graphics`` namespace here.

## Demonstration

Little example:
````js
let myCircle = new graphics.Circle(
    game, 
    {x: 540, y: 100}, //(1)!
    25 //(2)!
)
````

1. The center of the circle.
2. The radius of the circle.

You can add an image if you want and decide to not display it now, like ``Rectangle``.

You can also customize the drawing options. For a circle, you can change the way of the drawing cursor and put a start 
angle different from 0 rad and an end circle different from 2pi rad (the circle is not complete).

## Reference

For other further information, see the page about ``Graphic``, ``ImageHandlingInterface``, ``CurveInterface`` and ``CurveDrawingOptionsInterface``.

````ts
class Circle extends Graphic implements CurveInterface, ImageHandlingInterface {
    private image?: CanvasImageSource
    private drawingOptions: CurveDrawingOptionsInterface

    constructor(
        game: Game,
        position: Position,
        private radius: number,
        srcImage?: string,
        toDisplay?: boolean,
        drawingOptions?: CurveDrawingOptionsInterface
    ) {
    }

    setRadius(radius: number): void {}

    getRadius(): number {}
}
````

