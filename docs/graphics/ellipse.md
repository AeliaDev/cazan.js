# Ellipse

We'll use the ``cazan.graphics`` namespace here.

## Demonstration

Little example:
````js
let myEllispe = new graphics.Ellipse({
    game: game, 
    position: {x: 540, y: 100}, //(1)!
    radiusX: 25, //(2)!
    radiusY: 15, //(3)!
})
````

1. The center of the ellipse.
2. The radius of the x-axis of the circle.
3. The radius of the y-axis of the circle.

You can add an image if you want and decide to not display it now, like ``Rectangle`` or any other shape, you can customize 
the drawing options. For an ellipse, you can change the rotation of the drawing cursor and put a start angle different from 0 
rad and an end circle different from 2pi rad (the circle is not complete).

## Reference

For other further information, see the page about ``Graphic``, ``CurveInterface`` and ``CurveDrawingOptionsInterface``.

````ts
class Ellipse extends Graphic implements CurveInterface {
    private drawingOptions: CurveDrawingOptionsInterface = {
        startAngle: 0,
        endAngle: Math.PI * 2,
        rotation: Math.PI / 4
    }

    constructor(options: EllipseConstructorInterface) {}


    setRadius(options: {x?: number, y?: number}): void {}

    getRadius(): {x: number, y: number} {}
}
````

Information about the constructor:

````ts
interface EllipseConstructorInterface {
    game: Game,
    position: Position,
    radiusX: number,
    radiusY: number,
    styles?: GenericGraphicStylesInterface,
    toDisplay?: boolean,
    drawingOptions?: CurveDrawingOptionsInterface
}
````

