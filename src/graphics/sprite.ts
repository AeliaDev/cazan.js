import {SpriteImage} from "../types/graphics"
import {Rectangle} from "./rectangle"

export class Sprite {
    currentImage = 0

    /**
     *
     * @param rectangle
     * @param currentSequence It must be the name of one of the sequences of the ``images`` argument.
     * @param images It's an object that can contain multiple sequences of images.
     */
    constructor(
        protected rectangle: Rectangle,
        protected currentSequence: string,
        protected images: Record<string, SpriteImage[]>
    ) {
        this.process()
    }

    process() {
        this.rectangle.setImage(this.images[this.currentSequence][this.currentImage].image)
        this.currentImage++

        if(this.currentImage > this.images[this.currentSequence].length) this.currentImage = 0

        setTimeout(() => {
            this.process()
        }, this.images[this.currentSequence][this.currentImage].time)
    }

    changeSequence(newSequence: string) {
        this.currentSequence = newSequence
    }

    /**
     * You can use this method to create new sequences.
     */
    setImageSequence(sequence: string, images: SpriteImage[]) {
        this.images[sequence] = images
    }

    getImageSequence(sequence: string) {
        return this.images[sequence]
    }

    /**
     * Cazanw export
     */
    _getImageHash() {
        let paths: Record<string, string[]> = {}

        for(const sequence in this.images) {
            paths[sequence] = []
            for(const image in this.images[sequence]) {
                if(this.images[sequence][image].imgHash) {
                    paths[sequence].push(this.images[sequence][image].imgHash!)
                } else {
                    throw new Error("CWSpriteImageWithoutHash: you're using Cazanw plugin but you didn't specified an" +
                        " `imgHash` for the sprite image '" + image + "' of the '" + sequence + "' sequence (cazan)")
                }
            }
        }

        return paths
    }
}