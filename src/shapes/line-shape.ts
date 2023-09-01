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
        // TODO: refacto this
        "beginPath" in this.ctx ? this.ctx.beginPath() : console.log("err")
        "moveTo" in this.ctx ? this.ctx.moveTo(this.position.x, this.position.y) : console.log("err");
        "lineTo" in this.ctx ? this.ctx.lineTo(this.dimensions.x, this.dimensions.y) : console.log("err");
        "stroke" in this.ctx ? this.ctx.stroke() : console.log("err");
    }

    hide() {
        console.log('hi')
    }
}
