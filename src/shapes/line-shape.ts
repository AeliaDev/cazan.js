import {CRenderingContext} from "../types/global";
import {Shape} from "./shape";
import {Dimensions, Position} from "../types/shapes";
import {WrongContextException} from "../exceptions";

export class LineShape extends Shape {
    constructor(
        protected ctx: CRenderingContext,
        protected position: Position,
        protected dimensions: Dimensions
    ) {
        super(ctx, position, dimensions)
    }

    display() {
        // TODO: refacto this
        "beginPath" in this.ctx ? this.ctx.beginPath() : new WrongContextException({
            filename: "cazan/shapes/line-shape.ts",
            message: "'CanvasRenderingContext2D' for use 'beginPath()'"
        })
        "moveTo" in this.ctx ? this.ctx.moveTo(this.position.x, this.position.y) : new WrongContextException({
            filename: "cazan/shapes/line-shape.ts",
            message: "'CanvasRenderingContext2D' for use 'moveTo()'"
        })
        "lineTo" in this.ctx ? this.ctx.lineTo(this.dimensions.x, this.dimensions.y) : new WrongContextException({
            filename: "cazan/shapes/line-shape.ts",
            message: "'CanvasRenderingContext2D' for use 'lineTo()'"
        })
        "stroke" in this.ctx ? this.ctx.stroke() : new WrongContextException({
            filename: "cazan/shapes/line-shape.ts",
            message: "'CanvasRenderingContext2D' for use 'stroke()'"
        })
    }

    hide() {
        throw new Error("NotImplemented: LineShape.hide() isn't implemented yet.")
    }
}
