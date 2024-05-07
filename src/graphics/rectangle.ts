import {CwExport} from "../types/cw"
import {Dimensions, ImageHandlingInterface, Position} from "../types/graphics"
import {Game} from "../game"
import {GenericGraphicStylesInterface} from "../types/styles"
import {Graphic} from "./graphic"
import {NativeImage} from "../assets/native-image"

export class Rectangle extends Graphic implements ImageHandlingInterface {
    private image?: CanvasImageSource

    constructor(
        game: Game,
        position: Position,
        dimensions: Dimensions,
        styles?: GenericGraphicStylesInterface,
        srcImage?: string,
        toDisplay?: boolean
    ) {
        super(game, position, dimensions, styles, toDisplay)
        if(srcImage) {
            this.image = new NativeImage()
            this.image.src = srcImage
            this.image.onload = () => {
                typeof toDisplay === "undefined" || toDisplay ? this.draw() : null
            }
        }
    }

    draw(notMandatory = false) {
        /**
         * Do not draw the shape if it's not mandatory (like with the cazan's internal drawing loop) and if the shape is
         * hidden.
         */
        if(notMandatory && !this.toDisplay) return

        if(this.image) {
            this.game.getCtx().drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.dimensions.width,
                this.dimensions.height,
            )
            return
        }

        this.game.getCtx().fillRect(
            this.position.x,
            this.position.y,
            this.dimensions.width,
            this.dimensions.height,
        )
    }

    setImage(image: CanvasImageSource) {
        this.image = image
    }

    getImage() {
        return this.image ? this.image : null
    }

    getImageSource() {
        return (this.image && 'src' in this.image) ? this.image.src : null
    }

    /**
     * This is an internal function made for cazanw plugin.
     */
    _exportToCw(): CwExport {
        return [
            this.position,
            {x: this.position.x + this.dimensions.width, y: this.position.y},
            {x: this.position.x, y: this.position.y + this.dimensions.height},
            {x: this.position.x + this.dimensions.width, y: this.position.y + this.dimensions.height},
        ]
    }
}
