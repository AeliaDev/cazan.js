# Styles

!!!info
    For the Graphic styling API methods, please search in the Graphic section of Reference. These are method implemented 
    on the Graphic classes.

## Functions

### ``setFill(game: Game, rgba: string)``

This function sets the drawing color to fill shapes as the ``rgba`` param says.

!!!warning
    You must specify ``rgba`` param like this: ``styles.setFill(game, "rgba(X,X,X,X)")``

### ``setStroke(game: Game, rgba: string)``

Same thing as ``styles.setFill()`` but it's for stroke.

### ``setLineStyle(game: Game, options: LineStyleInterface)``

Customize the drawing line options.

### ``setTextStyle(game: Game, options: TextStyleInterface)``

Customize the text drawing options.
