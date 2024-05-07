import {CwExport} from "../types/cw"
import {ImageHandlingInterface, RectangleConstructorInterface} from "../types/graphics"
import {Graphic} from "./graphic"
import {NativeImage} from "../assets/native-image"

export class Rectangle extends Graphic implements ImageHandlingInterface {
    private image?: CanvasImageSource

    /**
     *
     * @param options RectangleConstructorInterface
     */
    constructor(options: RectangleConstructorInterface) {
        super({
            game: options.game,
            position: options.position,
            dimensions: options.dimensions,
            styles: options.styles,
            toDisplay: options.toDisplay
        })

        if(options.srcImage) {
            this.image = new NativeImage()
            this.image.src = options.srcImage
            this.image.onload = () => {
                typeof options.toDisplay === "undefined" || options.toDisplay ? this.draw() : null
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
