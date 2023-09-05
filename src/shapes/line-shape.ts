import {CRenderingContext} from "../types/global";
import {Shape} from "./shape";
import {Dimensions, Position} from "../types/shapes";

export class LineShape extends Shape {
    constructor(
        protected ctx: CRenderingContext,
        protected position: Position,
        protected dimensions: Dimensions
    ) {
        super(ctx, position, dimensions)
    }

    display() {
        this.ctx.beginPath()
        this.ctx.moveTo(this.position.x, this.position.y)
        this.ctx.lineTo(this.dimensions.x, this.dimensions.y)
        this.ctx.stroke()
    }

    hide() {
        throw new Error("NotImplemented: LineShape.hide() isn't implemented yet.")
    }
}
