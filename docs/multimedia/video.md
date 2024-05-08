# Video

There's how to use cazan assets' API for videos. We'll use the ``cazan.assets`` and the ``cazan.graphics`` namespaces here.

## Demonstration

Little example:
````js
let screen = new graphics.Rectangle({game: game, position: {x: 10, y: 200}, dimensions: {width: 150, lenght: 100}})
let video = new assets.Video(screen, ["video.mp4"])  //(1)!

video.play()
video.setLoop(true)
````

1. Here put the paths to the sources of the video. This may be useful for cross-browser compatibility. The screen here is just the rectangle element that will display the video.

This will create a `<div id="cazan-videos-container">` at the end of your body tag in your HTML page. In this div cazan will add for each audio a `<video id="cazan-video-{id}>` and in each of them there will be as `<source>` as required.

The ``Rectangle``'s duty is to display the video. In fact, the video changes of current image each screen refreshing, so Cazan gets the current image of the video to put it on the shape.


## Reference

For other information, see the page about ``Multimedia``.

````ts
class Video extends Multimedia {
    /**
     * @param rectangle
     * @param {string[]} sources The different sources of the audio file. This may be useful for cross-browser compatibility.
     */
    constructor(protected rectangle: Rectangle, sources: string[]) {}

    /**
     * You don't really need to use it. It's the function that permits to change of image on each frame.
     */
    process() {}
}
````
