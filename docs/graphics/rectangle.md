# Rectangle

We'll use the ``cazan.graphics`` namespace here.

## Demonstration

Little example:
````js
let myRect = new graphics.Rectangle(
    game, 
    {x: 10, y: 10}, 
    {x: 50, y: 50}
)
````

You can add an image if you want and decide to not display it now.
````js hl_lines="4-6 11"
let myRect = new graphics.Rectangle(
    game, 
    {x: 10, y: 10}, 
    {x: 50, y: 50},
    'img.png',
    false
)

// ...

myRect.draw() //(1)!
````

1. draw the rectangle

## Reference

For other further information, see the page about ``Graphic`` and ``ImageHandlingInterface``.

````ts
class Rectangle extends Graphic implements ImageHandlingInterface {
    private image?: CanvasImageSource

    constructor(
        game: Game,
        position: Position,
        dimensions: Dimensions,
        srcImage?: string,
        toDisplay?: boolean
    ) {}
}
````

