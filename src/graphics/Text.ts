import {Dimensions, Position} from "../types/graphics"
import {Game} from "../game"
import {Rectangle} from "./rectangle"
import {setFill, setStroke, setTextStyle} from "../styles"
import {TextInterface, UpdateTextInterface} from "../types/texts"
import {GenericGraphicStylesInterface} from "../types/styles"

export class Text extends Rectangle {
    /**
     *
     * @param game
     * @param position
     * @param dimensions
     * @param text warning: the position here are for the positions inside the rectangle.
     * @param styles warning: you must specify here graphic and text style
     * @param toDisplay
     */
    constructor(
        game: Game,
        position: Position,
        dimensions: Dimensions,
        protected text: TextInterface,
        styles?: GenericGraphicStylesInterface,
        toDisplay?: boolean
    ) {
        super(game, position, dimensions, styles, undefined, toDisplay)
    }

    draw(notMandatory: boolean = false) {
        /**
         * Do not draw the shape if it's not mandatory (like with the cazan's internal drawing loop) and if the shape is
         * hidden.
         */
        if(notMandatory && !this.toDisplay) return

        this.styles!.graphic.type === 'fill'
            ? setFill(this.game, this.styles!.graphic.color)
            : setStroke(this.game, this.styles!.graphic.color)

        this.game.getCtx().fillRect(
            this.position.x,
            this.position.y,
            this.dimensions.width,
            this.dimensions.height,
        )

        setTextStyle(this.game, this.styles!.text)

        if(this.text.type === "fill") {
            this.game.getCtx().fillText(
                this.text.text,
                this.position.x + this.text.x,
                this.position.y + this.text.y,
                this.text.maxWidth ? this.text.maxWidth : undefined
            )
        } else if(this.text.type === "stroke") {
            this.game.getCtx().strokeText(
                this.text.text,
                this.position.x + this.text.x,
                this.position.y + this.text.y,
                this.text.maxWidth ? this.text.maxWidth : undefined
            )
        }
    }

    setText(text: string): void {
        this.text.text = text
    }

    getText(): string {
        return this.text.text
    }

    setTextInterface(text: UpdateTextInterface): void {
        text.text ? this.text.text = text.text : undefined
        text.type ? this.text.type = text.type : undefined
        text.x ? this.text.x = text.x : undefined
        text.y ? this.text.y = text.y : undefined
        text.maxWidth ? this.text.maxWidth : undefined
    }

    getTextInterface(): TextInterface {
        return this.text
    }
}
