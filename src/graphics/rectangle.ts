import {Graphic} from "./graphic"
import {Game} from "../game";
import {Dimensions, ImageHandlingInterface, Position, NativeImage} from "../types/graphics"

export class Rectangle extends Graphic implements ImageHandlingInterface {
    private image?: HTMLImageElement

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

    setImage(image: HTMLImageElement) {
        this.image = image
    }

    getImage() {
        return this.image ? this.image : null
    }

    getImageSource() {
        return this.image ? this.image.src : null
    }
}
