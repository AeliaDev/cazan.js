import {Graphic} from "./graphic"
import {Game} from "../game";
import {Dimensions, Position} from "../types/graphics"
import {CwExport} from "../types/global"

export class Line extends Graphic {

    constructor(
        game: Game,
        firstPoint: Position,
        secondPoint: Position,
        toDisplay?: boolean
    ) {
        /**
         * Here the dimensions are actually the vector from firstPoint to secondPoint.
         */
        let dimensions: Dimensions = {
            x: (secondPoint.x - firstPoint.x),
            y: (secondPoint.y - firstPoint.y),
            z: null
        }

        super(game, firstPoint, dimensions, toDisplay)
    }

    draw() {
        if(!this.toDisplay) return

        this.game.getCtx().beginPath()
        this.game.getCtx().moveTo(this.position.x, this.position.y)
        this.game.getCtx().lineTo(
            this.position.x + this.dimensions.x,
            this.position.y + this.dimensions.y
        )
        this.game.getCtx().stroke()
    }

    /**
     * This is an internal function made for cazanw plugin.
     */
    _exportToCw(): CwExport {
        return [
            this.position,
            {x: this.position.x + this.dimensions.x, y: this.position.y + this.dimensions.y}
        ]
    }
}
