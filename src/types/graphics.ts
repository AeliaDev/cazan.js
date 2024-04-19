
export interface Position {
    x: number
    y: number
}

export interface Dimensions {
    x: number
    y: number
    z?: number
}

export interface ImageHandlingInterface {
    setImage(image: HTMLImageElement): void
    getImage(): HTMLImageElement | null
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

export const NativeImage = Image
