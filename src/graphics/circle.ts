import {Graphic} from "./graphic"
import {ImageHandlingInterface, NativeImage, Position} from "../types/graphics"
import {Game} from "../game"
import {CwExport} from "../types/global"

export class Circle extends Graphic implements ImageHandlingInterface {
    private image?: HTMLImageElement
    private radius: number

    constructor(
        game: Game,
        position: Position,
        radius: number,
        srcImage?: string,
        toDisplay?: boolean
    ) {
        super(game, position, {x: radius, y: 0, z: 0}, toDisplay)

        this.radius = radius

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
            this.game.getCtx().save()
            this.game.getCtx().beginPath()
            this.game.getCtx().arc(
                this.position.x,
                this.position.y,
                this.radius,
                0,
                Math.PI * 2,
                true
            )
            this.game.getCtx().closePath()
            this.game.getCtx().clip()

            this.game.getCtx().drawImage(
                this.image,
                this.position.x-this.radius,
                this.position.y-this.radius,
                this.radius*2,
                this.radius*2,
            )

            this.game.getCtx().beginPath()
            this.game.getCtx().arc(
                this.position.x,
                this.position.y,
                this.radius,
                0,
                Math.PI * 2,
                true
            )
            this.game.getCtx().clip()
            this.game.getCtx().closePath()

            this.game.getCtx().restore()

            return
        }

        this.game.getCtx().beginPath()
        this.game.getCtx().arc(
            this.position.x,
            this.position.y,
            this.radius,
            0,
            2 * Math.PI
        )
        this.game.getCtx().stroke()
    }

    setRadius(radius: number) {
        this.radius = radius
    }

    getRadius() {
        return this.radius
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

    /**
     * This is an internal function made for cazanw plugin.
     */
    _exportToCw(): CwExport {
        return {center: this.position, radius: this.radius}
    }
}
