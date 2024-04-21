import {Game} from "../game"
import {Dimensions, Position} from "../types/graphics"
import {CwExport} from "../types/global"

export class Graphic {
    readonly id!: number

    constructor(
        protected game: Game,
        protected position: Position,
        protected dimensions: Dimensions,
        protected toDisplay = true
    ) {
        this.id = this.game.getShapes().length
        this.game.registerShapes(this)
    }

    draw(): void {}

    hide(): void {
        this.toDisplay = false
    }

    getId() {
        return this.id
    }

    getGame() {
        return this.game
    }

    setPosition(options: {x?: number; y?: number}) {
        if(options.x) {
            this.position.x = options.x
        }
        if(options.y) {
            this.position.y = options.y
        }
    }

    getPosition() {
        return this.position
    }

    setDimensions(options: {x?: number; y?: number}) {
        if(options.x) {
            this.dimensions.x = options.x
        }
        if(options.y) {
            this.dimensions.y = options.y
        }
    }

    getDimensions() {
        return this.dimensions
    }

    toggleDisplay() {
        this.toDisplay = !this.toDisplay
    }

    getDisplayState() {
        return this.toDisplay
    }

    /**
     * This is an internal function made for cazanw plugin.
     */
    _exportToCw(): CwExport {
        return {}
    }
}
