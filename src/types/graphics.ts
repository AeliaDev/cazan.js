import {Game} from "../game"
import {GenericGraphicStylesInterface} from "./styles"
import {TextInterface} from "./texts"

export interface Position {
    x: number
    y: number
}

export interface Dimensions {
    width: number
    height: number
}

export interface ImageHandlingInterface {
    setImage(image: CanvasImageSource): void
    getImage(): CanvasImageSource | null
    getImageSource(): string | null
}

export interface CurveInterface {
    setDrawingOptions(options: CurveDrawingOptionsInterface): void
    getDrawingOptions(): CurveDrawingOptionsInterface
}

export interface CurveDrawingOptionsInterface {
    startAngle: number
    endAngle: number

    /** for Circle only */
    counterClockWise?: boolean

    /** for Ellipse only */
    rotation?: number
}

export declare interface GraphicConstructorInterface {
    game: Game,
    position: Position,
    dimensions: Dimensions,
    styles?: GenericGraphicStylesInterface,
    toDisplay?: boolean
}

export declare interface LineConstructorInterface {
    game: Game,
    firstPoint: Position,
    secondPoint: Position,
    styles?: GenericGraphicStylesInterface,
    toDisplay?: boolean
}

export declare interface RectangleConstructorInterface {
    game: Game,
    position: Position,
    dimensions: Dimensions,
    styles?: GenericGraphicStylesInterface,
    srcImage?: string,
    toDisplay?: boolean
}

export declare interface TextConstructorInterface {
    game: Game,
    position: Position,
    dimensions: Dimensions,
    text: TextInterface,
    styles?: GenericGraphicStylesInterface,
    toDisplay?: boolean
}

export declare interface CircleConstructorInterface {
    game: Game,
    position: Position,
    radius: number,
    styles?: GenericGraphicStylesInterface,
    srcImage?: string,
    toDisplay?: boolean,
    drawingOptions?: CurveDrawingOptionsInterface
}

export declare interface EllipseConstructorInterface {
    game: Game,
    position: Position,
    radiusX: number,
    radiusY: number,
    styles?: GenericGraphicStylesInterface,
    toDisplay?: boolean,
    drawingOptions?: CurveDrawingOptionsInterface
}
