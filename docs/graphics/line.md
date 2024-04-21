# Line

We'll use the ``cazan.graphics`` namespace here.

## Demonstration

There's how to create a line with Cazan.
````js
let myLine = new graphics.Line(
    game, 
    {x: 10, y: 10},  //(1)! 
    {x: 50, y: 150}  //(2)!
)
````

1. Position of the first point.
2. Position of the second point.

## Reference

For other further information, see the page about ``Graphic``, the parent of ``Line``.

````ts
export class Line extends Graphic {
    constructor(
        game: Game,
        firstPoint: Position,
        secondPoint: Position,
        toDisplay?: boolean
    ) {}
}
````
