import {CurveDrawingOptionsInterface, CurveInterface, EllipseConstructorInterface, Position} from "../types/graphics"
import {CwExport} from "../types/cw"
import {Game} from "../game"
import {GenericGraphicStylesInterface} from "../types/styles"
import {Graphic} from "./graphic"
import {setLineStyle, setStroke} from "../styles"

export class Ellipse extends Graphic implements CurveInterface {
    private radiusX: number
    private radiusY: number
    private drawingOptions: CurveDrawingOptionsInterface = {
        startAngle: 0,
        endAngle: Math.PI * 2,
        rotation: Math.PI / 4
    }

    /**
     * You can use `options.styles.line` for this shape.
     * @param options EllipseConstructorInterface
     */
    constructor(options: EllipseConstructorInterface) {
        super({
            game: options.game,
            position: options.position,
            dimensions: {width: options.radiusX, height: options.radiusY},
            styles: options.styles,
            toDisplay: options.toDisplay
        })

        this.radiusX = options.radiusX
        this.radiusY = options.radiusY

        if(options.drawingOptions) {
            this.setDrawingOptions(options.drawingOptions)
        }
    }

    draw(notMandatory = false) {
        /**
         * Do not draw the shape if it's not mandatory (like with the cazan's internal drawing loop) and if the shape is
         * hidden.
         */
        if(notMandatory && !this.toDisplay) return

        setStroke(this.game, this.styles!.graphic.color)

        setLineStyle(this.game, this.styles!.line)

        this.game.getCtx().beginPath()
        this.game.getCtx().ellipse(
            this.position.x,
            this.position.y,
            this.radiusX,
            this.radiusY,
            this.drawingOptions.rotation!,
            this.drawingOptions.startAngle,
            this.drawingOptions.endAngle
        )
        this.game.getCtx().stroke()
    }

    setRadius(options: {x?: number, y?: number}) {
        if(options.x) this.radiusX = options.x

        if(options.y) this.radiusY = options.y
    }

    getRadius() {
        return {x: this.radiusX, y: this.radiusY}
    }

    setDrawingOptions(options: CurveDrawingOptionsInterface): void {
        this.drawingOptions = options

        if(!this.drawingOptions.rotation) this.drawingOptions.rotation = Math.PI / 4
    }

    getDrawingOptions(): CurveDrawingOptionsInterface {
        return this.drawingOptions
    }

    /**
     * This is an internal function made for cazanw plugin.
     */
    _exportToCw(): CwExport {
        return {}
    }
}
