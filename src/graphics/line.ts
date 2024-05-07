import {CwExport} from "../types/cw"
import {Dimensions, Position} from "../types/graphics"
import {Game} from "../game"
import {GenericGraphicStylesInterface} from "../types/styles"
import {Graphic} from "./graphic"
import {setLineStyle, setStroke} from "../styles"

export class Line extends Graphic {

    /**
     *
     * @param game
     * @param firstPoint
     * @param secondPoint
     * @param styles warning: you must specify here graphic and line style
     * @param toDisplay
     */
    constructor(
        game: Game,
        firstPoint: Position,
        secondPoint: Position,
        styles?: GenericGraphicStylesInterface,
        toDisplay?: boolean
    ) {
        /**
         * Here the dimensions are actually the vector from firstPoint to secondPoint.
         */
        let dimensions: Dimensions = {
            width: (secondPoint.x - firstPoint.x),
            height: (secondPoint.y - firstPoint.y),
        }

        super(game, firstPoint, dimensions, styles, toDisplay)
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
