# Groups

Groups are set of many graphics put together in order to move them or display/hide them all at the same moment.

We'll use the ``cazan.graphics`` namespace here.

## Demonstration

````js
let head = new Rectangle({
    game: game,
    position: {x: 0, y: 0},
    dimensions: {width: 50, height: 50},
    styles: {graphic: {color: "rgba(255,165,0,1)", type: "fill"}},
    toDisplay: false //(1)!
})

let body = new Rectangle({
    game: game,
    position: {x: 0, y: 50},
    dimensions: {width: 50, height: 100},
    styles: {graphic: {color: "rgba(0,0,0,1)",type: "fill"}},
    toDisplay: false
})

let man = new Group(
    "man",
    {x: 100, y: 100}, //(2)!
    {
        "head": head, //(3)!
        "body": body
    }
)

man.show() //(4)!
````

1. You don't need to show them immediately after their creation (otherwise they will be displayed in order of the canvas origin)
2. This is the position of the group. It will be the origin of all graphics that belong to this group.
3. Here put the graphics and name them.
4. Don't forget to display the shapes after the initialisation! And you can use the Group properties already!

This will create a kind of man (that have an orange head and a black suit).

And there's how we can move the little man:
````js
man.setPosition({x: man.getPosition().x + 25})
````

## Reference

````ts
class Group {
    protected graphicsRelativesPositions: Record<string, Position> = {}
    
    constructor(
        protected name: string,
        protected position: Position,
        protected graphics: Record<string, Graphic>
    ) {}

    show(): void {}

    hide(): void {}

    setPosition(newPosition: {x?: number, y?: number}): void {}

    getPosition(): Position {}

    setGraphicRelativePositions(graphicName: string, newPosition: Position): void {}

    getGraphicsRelativePositions(): Record<string, Position> {}

    setName(name: string): void {}

    getName(): string {}

    setGraphics(graphics: Record<string, Graphic>): void {}

    addGraphic(newGraphic: {name: string, graphic: Graphic}): void {}

    removeGraphic(graphicName: string): void {}

    getGraphics(): Record<string, Graphic> {}

    getGraphic(name: string): Graphic {}

    private _registerRelativesPositions(graphic?: {name: string, graphic: Graphic}): void {}
}
````
