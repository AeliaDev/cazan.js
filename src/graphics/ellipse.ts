import {Graphic} from "./graphic"
import {Game} from "../game"
import {CurveDrawingOptionsInterface, CurveInterface, Position} from "../types/graphics"
import {CwExport} from "../types/global"

export class Ellipse extends Graphic implements CurveInterface {
    private drawingOptions: CurveDrawingOptionsInterface = {
        startAngle: 0,
        endAngle: Math.PI * 2,
        rotation: Math.PI / 4
    }

    constructor(
        game: Game,
        position: Position,
        protected radiusX: number,
        protected radiusY: number,
        toDisplay?: boolean,
        drawingOptions?: CurveDrawingOptionsInterface
    ) {
        super(game, position, {x: radiusX, y: radiusY}, toDisplay)

        if(drawingOptions) {
            this.setDrawingOptions(drawingOptions)
        }
    }

    draw() {
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
