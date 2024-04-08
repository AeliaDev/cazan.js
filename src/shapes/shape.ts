import {Game} from "../game";
import {Dimensions, Position} from "../types/shapes"

export class Shape {
    /**
     * Create new shape and displays it (by default)
     *
     * @param {Game} game
     * @param {boolean} toDisplay = true
     * @param {Position} position
     * @param {Dimensions} dimensions
     */
    constructor(
        protected game: Game,
        protected position: Position,
        protected dimensions: Dimensions,
        protected toDisplay?: boolean
    ) {
        typeof toDisplay === "undefined" || toDisplay ? this.display() : null
        this.game.registerShapes(this)
    }

    /**
     * Displays the shape.
     */
    display() {
        this.game.getCtx().fillRect(
            this.position.x,
            this.position.y,
            this.dimensions.x,
            this.dimensions.y
        )
    }

    /**
     * Hide the shape.
     */
    hide() {
        this.game.getCtx().clearRect(
            this.position.x,
            this.position.y,
            this.dimensions.x,
            this.dimensions.y
        )
    }

    getPosition() {
        return this.position
    }

    setPosition(position: Position) {
        this.position = position
    }
}
