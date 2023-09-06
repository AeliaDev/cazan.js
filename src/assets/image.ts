import {Dimensions, Position} from "../types/shapes";
import {NativeImage} from "./native-image";
import {CRenderingContext} from "../types/global";

export class Image {
    img = new NativeImage();

    /**
     * @param {CRenderingContext} ctx
     * @param {boolean} toDisplay = true
     * @param {string} src
     * @param {Position} position
     * @param {Dimensions} dimensions
     */
    constructor(
        protected ctx: CRenderingContext,
        protected src: string,
        protected position: Position,
        protected dimensions: Dimensions,
        protected toDisplay?: boolean
    ) {
        this.img.src = src;
        this.img.onload = () => {
            typeof toDisplay === "undefined" || toDisplay ?  this.display() : null
        }
    }

    /**
     * Displays the image on the canvas.
     */
    display() {
        this.ctx.drawImage(this.img, this.position.x, this.position.y, this.dimensions.x, this.dimensions.y)
    }

    /**
     * Hides the image on the canvas.
     */
    hide() {
        this.ctx.clearRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y)
    }
}