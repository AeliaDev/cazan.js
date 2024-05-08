# Rectangle

We'll use the ``cazan.graphics`` namespace here.

## Demonstration

Little example:
````js
let myRect = new graphics.Rectangle({
    game: game, 
    position: {x: 10, y: 10}, 
    dimensions: {width: 50, height: 50},
})
````

You can add an image if you want and decide to not display the element right now.
````js hl_lines="5-6 11"
let myRect = new graphics.Rectangle({
    game: game, 
    position: {x: 10, y: 10}, 
    dimensions: {width: 50, height: 50},
    srcImage: 'img.png',
    toDisplay: false
})

// ...

myRect.draw() //(1)!
````

1. draw the rectangle

## Reference

For other further information, see the page about ``Graphic`` and ``ImageHandlingInterface``.

````ts
class Rectangle extends Graphic implements ImageHandlingInterface {
    private image?: CanvasImageSource

    constructor(options: RectangleConstructorInterface) {}
}
````

Information about the constructor:

````ts
interface RectangleConstructorInterface {
    game: Game,
    position: Position,
    dimensions: Dimensions,
    styles?: GenericGraphicStylesInterface,
    srcImage?: string,
    toDisplay?: boolean
}
````

