# Audio

There's how to use cazan assets' API for audios. We'll use the ``cazan.assets`` namespace here.

## Demonstration

Little example:
````js
let myMusic = new assets.Audio(
    ["audio.mp3"] //(1)!
)
myMusic.play()
````

1. Here put the paths to the sources of the audio. This may be useful for cross-browser compatibility.

This will create a `<div id="cazan-audio-tracks">` at the end of your body tag in your HTML page. In this div cazan will add for each audio a `<audio id="cazan-audio-track-{id}>` and in each of them there will be as `<source>` as required.

That's it.

## Reference

For other information, see the page about ``Multimedia``.

````ts
class Audio extends Multimedia {
    /**
     * @param {string[]} sources The different sources of the audio file. This may be useful for cross-browser compatibility.
     */
    constructor(sources: string[]) {}
}
````
