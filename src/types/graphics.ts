
export interface Position {
    x: number
    y: number
}

export interface Dimensions {
    x: number
    y: number
    z: number | null
}

export interface ImageHandlingInterface {
    setImage(image: HTMLImageElement): void
    getImage(): HTMLImageElement | null
    getImageSource(): string | null
}

export const NativeImage = Image
