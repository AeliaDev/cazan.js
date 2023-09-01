import {CRenderingContext} from "../types/global";
import {Dimensions, Position} from "../types/shapes"

export class Shape {
    constructor(
        protected ctx: CRenderingContext,
        protected position: Position,
        protected dimensions: Dimensions
    ) {
        this.display()
    }

    display() {
        if ("fillRect" in this.ctx) {
            this.ctx.fillRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y)
        }
    }

    hide() {
        if ("clearRect" in this.ctx) {
            this.ctx.clearRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y)
        }
    }
}
