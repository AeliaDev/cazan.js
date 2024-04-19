import {Graphic} from "./graphic"
import {Game} from "../game";
import {Dimensions, Position} from "../types/graphics"

export class Line extends Graphic {

    constructor(
        game: Game,
        position: Position,
        dimensions: Dimensions,
        toDisplay?: boolean
    ) {
        super(game, position, dimensions, toDisplay)
    }

    draw() {
        if(!this.toDisplay) return

        this.game.getCtx().beginPath()
        this.game.getCtx().moveTo(this.position.x, this.position.y)
        this.game.getCtx().lineTo(this.dimensions.x, this.dimensions.y)
        this.game.getCtx().stroke()
    }
}
