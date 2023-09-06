import {CRenderingContext} from "../types/global";
import {Dimensions, Position} from "../types/shapes"

export class Shape {
    /**
     * Create new shape and displays it (by default)
     *
     * @param {CRenderingContext} ctx
     * @param {boolean} toDisplay = true
     * @param {Position} position
     * @param {Dimensions} dimensions
     */
    constructor(
        protected ctx: CRenderingContext,
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
        this.ctx.fillRect(
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
        this.ctx.clearRect(
            this.position.x,
            this.position.y,
            this.dimensions.x,
            this.dimensions.y
        )
    }
}
