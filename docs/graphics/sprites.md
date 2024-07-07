# Sprites

!!!warning
This feature isn't already tested well. It could evolve.

## Demonstration

````js
let rectangle = new Rectangle({ /* .... */ })
let sprite = new Sprite(
    rectangle, //(1)! 
    "seq1", //(2)!
    {
        "seq1": [ //(3)!
            {image: "img1.1", time: 500},
            {image: "img1.2", time: 1500}, //(4)!
            {image: "img1.3", time: 500}
        ],
        "seq2": [
            {image: "img2.1", time: 500},
            {image: "img2.2", time: 500},
            {image: "img2.3", time: 500}
        ]
    }
)
````

1. The graphic that hosts the sprite.
2. The current sequence. It's the name of the sequence that will be automatically be used by Cazan.
3. Here define your different sequences of images.
4. This image here will be displayed a bit longer than the other of its sequence.

It creates a sprite on the ``rectangle``. On this sprite there's two different sequences of three images each.

If you want to change of sequence, just type:

````js
sprite.changeSequence("seq2")
````

!!!tip "About multiple sequences..."
We invented this system to help you to animate characters! You know, there's many steps to animate somebody walking,
but with this set of many sequences, you can create a sequence of animations for each direction on only one sprite!

    Example:
    ````js
    let player = new Rectangle({ /* .... */ })
    let sprite = new Sprite(
        player,
        "right",
        {
            "right": [
                {image: "img1.1", time: 500},
                {image: "img1.2", time: 500},
                {image: "img1.3", time: 500}
            ],
            "left": [
                {image: "img2.1", time: 500},
                {image: "img2.2", time: 500},
                {image: "img2.3", time: 500}
            ]
            // ......
        }
    )
    ````

## Reference

````ts
class Sprite {
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
    ) {}

    changeSequence(newSequence: string): void {}

    /**
     * You can use this method to create new sequences.
     */
    setImageSequence(sequence: string, images: SpriteImage[]): void {}

    getImageSequence(sequence: string): SpriteImage[] {}
}
````
