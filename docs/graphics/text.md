# Text

We'll use the ``cazan.graphics`` namespace here.

## Demonstration

Little example:
````js
let myText = new graphics.Text({
    game: game,
    position: {x: 20, y: 20},
    dimensions: {width: 100, height: 15},
    text: {  //(1)!
        text: "Hello, World!",
        type: "fill",
        x: 5, y: 5  //(2)!
    },
    styles: {
        graphic: {color: "#000", type: "fill"},
        text: {color: "#fff"}  //(3)!
    }
})
````

1. You can specify data about the text here.
2. The ``x`` and ``y`` are calculated from the top left corner of the rectangle drawn. By default, they are set to ``x = y = 0``.
3. On this element you should put a different draw color for the text and for the rectangle (you want that the user can read it, right?). You will have the documentation about Styling on the next page.


!!!note
    ``Text`` is a kind of ``Rectangle`` that can display a text on it. So you can use it as a normal graphic element. 


## Reference

For other further information, see the page about ``Graphic`` and ``Rectangle``.

````ts
class Text extends Rectangle {
    protected text: TextInterface

    constructor(options: TextConstructorInterface) {}

    /**
     * This setter and the next getter are for editing/getting the text but not the others settings of the text interface. 
     * @param text
     */
    setText(text: string): void {}

    getText(): string {}

    /**
     * This setter and the next getter are for editing/getting the text interface in full. 
     * @param text
     */
    setTextInterface(text: UpdateTextInterface): void {}

    getTextInterface(): TextInterface {}
}
````

Information about the constructor:

````ts
interface TextConstructorInterface {
    game: Game,
    position: Position,
    dimensions: Dimensions,
    text: TextInterface,
    styles?: GenericGraphicStylesInterface,
    toDisplay?: boolean
}
````

TextInterface and UpdateTextInterface:

````ts
interface TextInterface {
    text: string
    type: "fill" | "stroke"
    x?: number
    y?: number
    maxWidth?: number
}

interface UpdateTextInterface {
    text?: string
    type?: "fill" | "stroke"
    x?: number
    y?: number
    maxWidth?: number
}
````
