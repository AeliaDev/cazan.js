import {CwExport} from "../types/cw"
import {Dimensions, GraphicConstructorInterface, Position} from "../types/graphics"
import {Game} from "../game"
import {GenericGraphicStylesInterface} from "../types/styles"
import {setFill, setStroke} from "../styles"

export class Graphic {
    readonly id!: number
    protected game: Game
    protected position: Position
    protected dimensions: Dimensions
    protected styles?: GenericGraphicStylesInterface
    protected toDisplay = true

    /**
     *
     * @param options GraphicConstructorInterface
     */
    constructor(options: GraphicConstructorInterface) {
        this.game = options.game
        this.position = options.position
        this.dimensions = options.dimensions
        this.styles = options.styles
        this.toDisplay = options.toDisplay ? options.toDisplay : true

        this.id = this.game.getGraphics().length
        this.game.registerGraphic(this)

        this.setDefaultStyles()
    }

    draw(notMandatory?: boolean): void {}

    destroy() {
        this.game.unregisterGraphic(this.id)
    }

    setupStylesForDrawing() {
        !this.styles ? this.setDefaultStyles() : undefined

        this.styles!.graphic.type === 'fill'
            ? setFill(this.game, this.styles!.graphic.color)
            : setStroke(this.game, this.styles!.graphic.color)
    }

    private setDefaultStyles() {
        if(!this.styles) {
            this.styles = this.game.getGraphics()[this.game.getGraphics().length-1]?.getStyles()
        }
    }

    setStyles(styles: GenericGraphicStylesInterface) {
        this.styles = styles
    }

    getStyles() {
        return this.styles
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

    setDimensions(options: {width?: number; height?: number}) {
        if(options.width) {
            this.dimensions.width = options.width
        }
        if(options.height) {
            this.dimensions.height = options.height
        }
    }

    getDimensions() {
        return this.dimensions
    }

    show(): void {
        this.toDisplay = true
    }

    hide(): void {
        this.toDisplay = false
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
