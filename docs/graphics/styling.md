# Styling shapes

We'll use the ``cazan.graphics`` and the ``cazan.styles`` namespaces in this page.

!!!bug
    This API might be bugging.

## Categories of styling

There are three categories of styling: <br/>
- ``graphic`` for styling the general style of the element. It could be used for all graphic elements. <br/>
- ``line`` for styling shapes that uses lines to be drawn. It could be used on Circle, Ellipse and Line. <br/>
- ``text`` for styling texts. It could be used only on Text. <br/>

### ``graphic``

With the graphic styles you can configure the color and the type (``fill`` or ``stroke``) of the element.

### ``line``

With the line styles you can set the line's width, and its cap (``butt``, ``round``, or ``square``), join (``round``, ``bevel``, or ``miter``), miterLimit , dash (``[number, number]``), and dashOffset.

You can use this styling on ``Circle``, ``Ellipse``, and of course on ``Line``.

### ``text``

You can style texts with text styles. You can customize the color, the font, the textAlign (``start``, ``end``, ``left``, ``right``, or ``center``), the textBaseline (``top``, ``hanging``, ``middle``, ``alphabetic``, ``ideographic``, or ``bottom``) and the direction (``ltr``, ``rtl``, ``inherit``) of the text.

## Styling an element

You just have to define the style on an element. Like in this example:

````js
let myRect = new graphics.Rectangle({
    // ... basic rectangle implementation
    styles: {
        grahic: {
            type: 'fill',
            color: '#000'
        }
    }
})
````

And another with a line:

````js
let myLine = new graphics.Line({
    // ... basic line implementation
    styles: {
        grahic: {
            type: 'fill',
            color: '#000'
        },
        line: {
            width: 20
        }
    }
})
````

And this example for a text:

````js
let myText = new graphics.Text({
    // ... basic line implementation
    styles: {
        graphic: {color: "#000", type: "fill"},
        text: {color: "#fff"}
    }
})
````

!!!note
    For texts, you must provide a different color for the text and for the background of the text. That's better for reading it. 

!!!tip
    If the styles aren't set on an element, Cazan will use the latest created element style. But attention: you have to style the first element!

## Reference

These are the functions and interfaces that Cazan uses to styling elements. But you might need to use them someday so, here they are!

### Functions

#### setFill(game, rgba)

This function sets the drawing color to fill shapes as the ``rgba`` param says.

!!!warning
    You must specify ``rgba`` param like this: ``styles.setFill(game, "rgba(X,X,X,X)")``

#### setStroke(game, rgba)

Same thing as ``styles.setFill()`` but it's for stroke.

#### setLineStyle(game, options)

Customize the drawing line options. 

Note: ``options``'s type is ``LineStyleInterface``.

#### setTextStyle(game, options)

Customize the text drawing options.

Note: ``options``'s type is ``TextStyleInterface``.

### Interfaces

#### LineStyleInterface

````ts
interface LineStyleInterface {
    width?: number
    cap?: "butt" | "round" | "square"
    join?: "round" | "bevel" | "miter"
    miterLimit?: number
    dash?: [number, number]
    dashOffset?: number
}
````

#### TextStyleInterface

````ts
interface TextStyleInterface {
    color: string
    /**
     * Use `TextStyleInterface.font` as the CSS property `font`.
     */
    font?: string
    textAlign?: "start" | "end" | "left" | "right" | "center"
    textBaseline?: "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom"
    direction?: "ltr" | "rtl" | "inherit"
}
````

#### GraphicStylesInterface 

````ts
interface GraphicStylesInterface {
    color: string
    type: 'fill' | 'stroke'
}
````

#### GenericGraphicStylesInterface

````ts
interface GenericGraphicStylesInterface {
    graphic: GraphicStylesInterface
    /**
     * only for shapes drawn by lines
     */
    line: LineStyleInterface
    /**
     * only for Text
     */
    text: TextStyleInterface
}
````
