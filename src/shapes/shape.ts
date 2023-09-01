import {CRenderingContext} from "../types/global";
import {Dimensions, Position} from "../types/shapes"
import {WrongContextException} from "../exceptions";

export class Shape {
    constructor(
        protected ctx: CRenderingContext,
        protected position: Position,
        protected dimensions: Dimensions
    ) {
        this.display()
    }

    display() {
        "fillRect" in this.ctx ? this.ctx.fillRect(
            this.position.x,
            this.position.y,
            this.dimensions.x,
            this.dimensions.y
        ) : new WrongContextException({
            filename: "cazan/shapes/shape.ts",
            message: "'CanvasRenderingContext2D' for use 'fillRect()'"
        })
    }

    hide() {
        "clearRect" in this.ctx ? this.ctx.clearRect(
            this.position.x,
            this.position.y,
            this.dimensions.x,
            this.dimensions.y
        ) : new WrongContextException({
            filename: "cazan/shapes/line-shape.ts",
            message: "'CanvasRenderingContext2D' for use 'clearRect()'"
        })
    }
}
