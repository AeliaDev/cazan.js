import {CurveDrawingOptionsInterface, CurveInterface, Position} from "../types/graphics"
import {CwExport} from "../types/cw"
import {Game} from "../game"
import {GenericGraphicStylesInterface} from "../types/styles"
import {Graphic} from "./graphic"
import {setLineStyle, setStroke} from "../styles"

export class Ellipse extends Graphic implements CurveInterface {
    private drawingOptions: CurveDrawingOptionsInterface = {
        startAngle: 0,
        endAngle: Math.PI * 2,
        rotation: Math.PI / 4
    }

    /**
     *
     * @param game
     * @param position
     * @param radiusX
     * @param radiusY
     * @param styles warning: you can put line styling on this element
     * @param toDisplay
     * @param drawingOptions
     */
    constructor(
        game: Game,
        position: Position,
        protected radiusX: number,
        protected radiusY: number,
        styles?: GenericGraphicStylesInterface,
        toDisplay?: boolean,
        drawingOptions?: CurveDrawingOptionsInterface
    ) {
        super(game, position, {width: radiusX, height: radiusY}, styles, toDisplay)

        if(drawingOptions) {
            this.setDrawingOptions(drawingOptions)
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
