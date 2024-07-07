import {Graphic} from "./graphic"
import {Position} from "../types/graphics"

export class Group {
    protected graphicsRelativesPositions: Record<string, Position> = {}

    /**
     *
     * @param name
     * @param position this is the position of the group. Consider it as the origin for all shapes included.
     * @param graphics object containing all Graphics of the group, associated with their name.
     */
    constructor(
        protected name: string,
        protected position: Position,
        protected graphics: Record<string, Graphic>
    ) {
        this._registerRelativesPositions()

        this.setPosition(this.position)
    }

    show() {
        for (const graphicName in this.graphics) {
            this.graphics[graphicName].show()
        }
    }

    hide() {
        for (const graphicName in this.graphics) {
            this.graphics[graphicName].hide()
        }
    }

    setPosition(newPosition: {x?: number, y?: number}): void {
        newPosition.x ? this.position.x = newPosition.x : undefined
        newPosition.y ? this.position.y = newPosition.y : undefined

        for (const graphicName in this.graphics) {
            let currentGraphic = this.graphics[graphicName]
            let currentGraphicRelativePosition = this.graphicsRelativesPositions[graphicName]

            currentGraphic.setPosition({x: this.position.x + currentGraphicRelativePosition.x, y: this.position.y + currentGraphicRelativePosition.y})
        }
    }

    getPosition() {
        return this.position
    }

    setGraphicRelativePositions(graphicName: string, newPosition: Position) {
        this.graphicsRelativesPositions[graphicName] = newPosition
    }

    getGraphicsRelativePosition(graphicName: string) {
        return this.graphicsRelativesPositions[graphicName]
    }

    getGraphicsRelativePositions() {
        return this.graphicsRelativesPositions
    }

    setName(name: string) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setGraphics(graphics: Record<string, Graphic>) {
        this.graphics = graphics

        this._registerRelativesPositions()
    }

    addGraphic(newGraphic: {name: string, graphic: Graphic}) {
        this.graphics[newGraphic.name] = newGraphic.graphic

        this._registerRelativesPositions(newGraphic)
    }

    removeGraphic(graphicName: string) {
        delete this.graphics[graphicName]
        delete this.graphicsRelativesPositions[graphicName]
    }

    getGraphics() {
        return this.graphics
    }

    getGraphic(name: string) {
        return this.graphics[name]
    }

    private _registerRelativesPositions(graphic?: {name: string, graphic: Graphic}): void {
        if(graphic) {
            this.graphicsRelativesPositions[graphic.name] = { ...graphic.graphic.getPosition() }
            return
        }

        for(const graphic in this.graphics) {
            this.graphicsRelativesPositions[graphic] = { ...this.graphics[graphic].getPosition() }
        }
    }
}