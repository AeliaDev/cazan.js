import {Graphic} from "./graphic"
import {Game} from "../game"
import {Dimensions, ImageHandlingInterface, Position, NativeImage} from "../types/graphics"
import {CwExport} from "../types/global"

export class Rectangle extends Graphic implements ImageHandlingInterface {
    private image?: CanvasImageSource

    constructor(
        game: Game,
        position: Position,
        dimensions: Dimensions,
        srcImage?: string,
        toDisplay?: boolean
    ) {
        super(game, position, dimensions, toDisplay)
        if(srcImage) {
            this.image = new NativeImage()
            this.image.src = srcImage

            // is this necessary?
            this.image.onload = () => {
                typeof toDisplay === "undefined" || toDisplay ? this.draw() : null
            }
        }
    }

    draw() {
        if(!this.toDisplay) return

        if(this.image) {
            this.game.getCtx().drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.dimensions.x,
                this.dimensions.y,
            )
            return
        }

        this.game.getCtx().fillRect(
            this.position.x,
            this.position.y,
            this.dimensions.x,
            this.dimensions.y,
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
            {x: this.position.x + this.dimensions.x, y: this.position.y},
            {x: this.position.x, y: this.position.y + this.dimensions.y},
            {x: this.position.x + this.dimensions.x, y: this.position.y + this.dimensions.y},
        ]
    }
}
