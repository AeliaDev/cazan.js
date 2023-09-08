import {Game} from "../game";
import {Shape} from "./shape";
import {Dimensions, Position} from "../types/shapes";

export class LineShape extends Shape {
    constructor(
        protected game: Game,
        protected position: Position,
        protected dimensions: Dimensions,
        protected toDisplay?: boolean
    ) {
        super(game, position, dimensions, toDisplay)
    }

    /**
     * Displays the line.
     */
    display() {
        this.game.getCtx().beginPath()
        this.game.getCtx().moveTo(this.position.x, this.position.y)
        this.game.getCtx().lineTo(this.dimensions.x, this.dimensions.y)
        this.game.getCtx().stroke()
    }

    /**
     * Hide the line.
     *
     * ----------------------------------
     * **Warning**: *not implemented yet*
     */
    hide() {
        throw new Error("NotImplemented: LineShape.hide() isn't implemented yet.")
    }
}
