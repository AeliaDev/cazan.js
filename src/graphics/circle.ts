import {
    CurveDrawingOptionsInterface,
    CurveInterface,
    ImageHandlingInterface,
    Position
} from "../types/graphics"
import {CwExport} from "../types/cw"
import {Game} from "../game"
import {GenericGraphicStylesInterface} from "../types/styles"
import {Graphic} from "./graphic"
import {NativeImage} from "../assets/native-image"
import {setLineStyle, setFill} from "../styles"

export class Circle extends Graphic implements CurveInterface, ImageHandlingInterface {
    private image?: CanvasImageSource
    private drawingOptions: CurveDrawingOptionsInterface = {
        startAngle: 0,
        endAngle: Math.PI * 2,
        counterClockWise: true
    }

    /**
     *
     * @param game
     * @param position
     * @param radius
     * @param styles warning: you can put line styling on this element
     * @param srcImage
     * @param toDisplay
     * @param drawingOptions
     */
    constructor(
        game: Game,
        position: Position,
        private radius: number,
        styles?: GenericGraphicStylesInterface,
        srcImage?: string,
        toDisplay?: boolean,
        drawingOptions?: CurveDrawingOptionsInterface
    ) {
        super(game, position, {width: radius, height: 0}, styles, toDisplay)

        if(drawingOptions) {
            this.setDrawingOptions(drawingOptions)
        }

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

        setFill(this.game, this.styles!.graphic.color)

        if(this.styles!.line) {
            setLineStyle(this.game, this.styles!.line)
        }

        if(this.image) {
            this.game.getCtx().save()
            this.game.getCtx().beginPath()
            this.game.getCtx().arc(
                this.position.x,
                this.position.y,
                this.radius,
                this.drawingOptions.startAngle,
                this.drawingOptions.endAngle,
                this.drawingOptions.counterClockWise
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
                this.drawingOptions.startAngle,
                this.drawingOptions.endAngle,
                this.drawingOptions.counterClockWise
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
            this.drawingOptions.startAngle,
            this.drawingOptions.endAngle
        )
        this.game.getCtx().stroke()
    }

    setRadius(radius: number) {
        this.radius = radius
    }

    getRadius() {
        return this.radius
    }

    setDrawingOptions(options: CurveDrawingOptionsInterface) {
        this.drawingOptions = options

        if(!this.drawingOptions.counterClockWise) this.drawingOptions.counterClockWise = true
    }

    getDrawingOptions() {
        return this.drawingOptions
    }

    setImage(image: HTMLImageElement) {
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
        return {center: this.position, radius: this.radius}
    }
}
