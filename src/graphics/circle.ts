import {
    CircleConstructorInterface,
    CurveDrawingOptionsInterface,
    CurveInterface,
    ImageHandlingInterface
} from "../types/graphics"
import {CwExport} from "../types/cw"
import {Graphic} from "./graphic"
import {NativeImage} from "../assets/native-image"
import {setLineStyle, setFill} from "../styles"

export class Circle extends Graphic implements CurveInterface, ImageHandlingInterface {
    private image?: CanvasImageSource
    private radius!: number
    private drawingOptions: CurveDrawingOptionsInterface = {
        startAngle: 0,
        endAngle: Math.PI * 2,
        counterClockWise: true
    }

    /**
     * You can use `options.styles.line` for this shape.
     * @param options CircleConstructorInterface
     */
    constructor(options: CircleConstructorInterface) {
        super({
            game: options.game,
            position: options.position,
            dimensions: {width: options.radius, height: 0},
            styles: options.styles,
            toDisplay: options.toDisplay
        })

        this.radius = options.radius
        this.drawingOptions = options.drawingOptions ? options.drawingOptions : this.drawingOptions

        if(options.drawingOptions) {
            this.setDrawingOptions(options.drawingOptions)
        }

        if(options.srcImage) {
            this.image = new NativeImage()
            this.image.src = options.srcImage
            this.image.onload = () => {
                typeof this.toDisplay === "undefined" || this.toDisplay ? this.draw() : null
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
