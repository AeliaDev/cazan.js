import {Game} from "../game";
import {Dimensions, Position} from "../types/shapes";
import {NativeImage} from "./native-image";

export class Image {
    img = new NativeImage();

    /**
     * @param {Game} game
     * @param {boolean} toDisplay = true
     * @param {string} src
     * @param {Position} position
     * @param {Dimensions} dimensions
     */
    constructor(
        protected game: Game,
        protected src: string,
        protected position: Position,
        protected dimensions: Dimensions,
        protected toDisplay?: boolean
    ) {
        this.img.src = src;
        this.img.onload = () => {
            typeof toDisplay === "undefined" || toDisplay ?  this.display() : null
        }
        this.game.registerShapes(this)
    }

    /**
     * Displays the image on the canvas.
     */
    display() {
        this.game.getCtx().drawImage(this.img, this.position.x, this.position.y, this.dimensions.x, this.dimensions.y)
    }

    /**
     * Hides the image on the canvas.
     */
    hide() {
        this.game.getCtx().clearRect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y)
    }
}