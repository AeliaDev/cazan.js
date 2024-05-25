import {CwExport} from "../types/cw"
import {Dimensions, LineConstructorInterface} from "../types/graphics"
import {Graphic} from "./graphic"
import {setLineStyle, setStroke} from "../styles"

export class Line extends Graphic {

    /**
     *
     * @param options LineConstructorInterface
     */
    constructor(options: LineConstructorInterface) {
        /**
         * Here the dimensions are actually the vector from firstPoint to secondPoint.
         */
        let dimensions: Dimensions = {
            width: (options.secondPoint.x - options.firstPoint.x),
            height: (options.secondPoint.y - options.firstPoint.y),
        }

        super({
            game: options.game,
            position: options.firstPoint,
            dimensions: dimensions,
            styles: options.styles,
            toDisplay: options.toDisplay
        })
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
        this.game.getCtx().moveTo(this.position.x, this.position.y)
        this.game.getCtx().lineTo(
            this.position.x + this.dimensions.width,
            this.position.y + this.dimensions.height
        )
        this.game.getCtx().stroke()
    }

    /**
     * This is an internal function made for cazanw plugin.
     */
    _exportToCw(): CwExport {
        return [
            this.position,
            {x: this.position.x + this.dimensions.width, y: this.position.y + this.dimensions.height}
        ]
    }
}
