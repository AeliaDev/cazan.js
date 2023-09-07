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
    }

    /**
     * Displays the shape.
     */
    display() {
        this.game.get_ctx().fillRect(
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
        this.game.get_ctx().clearRect(
            this.position.x,
            this.position.y,
            this.dimensions.x,
            this.dimensions.y
        )
    }
}
