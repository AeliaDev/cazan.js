# Other utils

## Classes

### ``Text``

``Text`` extends ``Rectangle``, you can move it like all other graphic elements.

#### ``constructor(options: TextConstructorInterface)``

Creates a new ``Text`` object.

#### ``draw(notMandatory: boolean = false)``

Cf. graphics ``draw`` method.

#### ``setText(text: string): void``

Change the text to display.

#### ``getText(): string``

Returns the current text.

#### ``setTextInterface(text: UpdateTextInterface): void``

Change text writing params.

#### ``getTextInterface(): TextInterface``

Returns the current text writing params.

### ``Sprite``

!!!bug
    Not finished yet. 

### ``Group``

#### ``constructor(name: string, position: Position, graphics: Record<string, Graphic>)``

Creates a new instance of ``Group``.

Please note that the ``position`` argument is the position of the group. Consider it as the origin for all shapes 
included. Furthermore, the positions of all the shapes included are relative to this point.

The shapes are contained in an object, and you have to give a name/key for each of them.

#### ``show(): void``

Displays all contained shapes at the same time.

#### ``hide(): void``

Hides all contained shapes at the same time.

#### ``setPosition(newPosition: {x?: number, y?: number}): void``

Change the position of the group, so it moves all the shapes at the same time.

#### ``getPosition(): Position``

Returns the group's position.

#### ``setGraphicRelativePositions(graphicName: string, newPosition: Position)``

Changes a graphic's relative position by its name/key. It will change the position of the graphic in relation to the 
group's position.

#### ``getGraphicsRelativePosition(graphicName: string): Position``

Get a graphic's relative positions.

#### ``getGraphicsRelativePositions(): Record<string, Position>``

Get all relatives positions.

#### ``setName(name: string)``

Changes the group's name.

#### ``getName(): string``

Returns the group's name.

#### ``setGraphics(graphics: Record<string, Graphic>): void``

Change the set of shapes.

#### ``addGraphic(newGraphic: {name: string, graphic: Graphic}): void``

Add a shape in the group.

#### ``removeGraphic(graphicName: string): void``

Remove a shape from the group.

#### ``getGraphics(): Record<string, Graphic>``

Get the shape set.

#### ``getGraphic(name: string): Graphic``

Get a specific graphic.

#### ``_registerRelativesPositions(graphic?: {name: string, graphic: Graphic}): void`` (private)

Save relatives position of recently added shapes before the first movement.

## Functions

### ``textMeasurement(game: Game, text: string): TextMetrics``

Measure text.

## Interfaces

### ``TextConstructorInterface``

- ``game``: Game
- ``position``: Position
- ``dimensions``: Dimensions
- ``text``: TextInterface
- ``styles``: GenericGraphicStylesInterface (optional)
- ``toDisplay``: boolean (optional)

### ``TextInterface``

- ``text``: string
- ``type``: "fill" | "stroke"
- ``x``: number (optional)
- ``y``: number (optional)
- ``maxWidth``: number (optional)

### ``UpdateTextInterface``

- ``text``: string (optional)
- ``type``: "fill" | "stroke" (optional)
- ``x``: number (optional)
- ``y``: number (optional)
- ``maxWidth``: number (optional)

### ``SpriteImage``

- ``image``: CanvasImageSource | string
- ``imgHash``: string, mandatory if Cazanw (or other plugin that need it) is used, it's the hash that permits to this 
plugin to identify the images (optional)
- ``time``: number, in milliseconds
