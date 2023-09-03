import {Dimensions, Position} from "../types/shapes";
import {NativeImage} from "./native-image";

export class Image {
    img = new NativeImage();

    constructor(
        protected ctx: RenderingContext,
        protected src: string,
        protected position: Position,
        protected dimensions: Dimensions,
    ) {
        this.img.src = src;
        this.img.onload = () => {
            this.display()
        }
    }

    display() {
        if ("drawImage" in this.ctx) {
            this.ctx.drawImage(this.img, this.position.x, this.position.y, this.dimensions.x, this.dimensions.y)
        }
    }

    hide() {
        if ("clearRect" in this.ctx) {
            this.ctx.clearRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y)
        }
    }
}