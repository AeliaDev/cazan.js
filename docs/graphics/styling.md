# Styling shapes

We'll use the ``cazan.styles`` namespace in this page.

!!!warning
    This API might be updated in the future.

## setFill(game, rgba)

This function sets the drawing color for fill shapes as the ``rgba`` param says.

!!!warning
    You must specify ``rgba`` param like this: ``styles.setFill(game, "rgba(X,X,X,X)")``

## setStroke(game, rgba)

Same thing as ``styles.setFill()`` but it's for stroke.

## setLineStyle(game, option)

Customize the drawing line options. 

Note: ``options``'s type is ``LineStyleInterface``.

````ts
interface LineStyleInterface {
    width?: number
    cap?: string & ("butt" | "round" | "square")
    join?: string & ("round" | "bevel" | "miter")
    miterLimit?: number
    dash?: [number, number]
    dashOffset?: number
}
````

## setTextStyle(game, options)

!!!bug
    The text drawing is not available for the moment. This API is too old and not adapted to the current drawing mecanism.

Customize the text drawing options.

Note: ``options``'s type is ``TextStyleInterface``.

````ts
interface TextStyleInterface {
    font?: string
    textAlign?: string & ("start" | "end" | "left" | "right" | "center")
    textBaseline?: string & ("top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom")
    direction?: string & ("ltr" | "rtl" | "inherit")
}
````
