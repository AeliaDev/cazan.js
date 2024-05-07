
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
