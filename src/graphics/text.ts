import {TextConstructorInterface} from "../types/graphics"
import {Rectangle} from "./rectangle"
import {setFill, setStroke, setTextStyle} from "../styles"
import {TextInterface, UpdateTextInterface} from "../types/texts"

export class Text extends Rectangle {
    protected text: TextInterface

    /**
     *
     * @param options TextConstructorInterface
     */
    constructor(options: TextConstructorInterface) {
        super({
            game: options.game,
            position: options.position,
            dimensions: options.dimensions,
            styles: options.styles,
            srcImage: undefined,
            toDisplay: options.toDisplay
        })

        this.text = options.text

        !this.text.x ? this.text.x = 0 : undefined
        !this.text.y ? this.text.y = 0 : undefined
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
                this.position.x + this.text.x!,
                this.position.y + this.text.y!,
                this.text.maxWidth ? this.text.maxWidth : undefined
            )
        } else if(this.text.type === "stroke") {
            this.game.getCtx().strokeText(
                this.text.text,
                this.position.x + this.text.x!,
                this.position.y + this.text.y!,
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
