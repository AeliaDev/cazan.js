import {Multimedia} from "./multimedia"
import {Rectangle} from "../graphics"

export class Video extends Multimedia {
    /**
     * @param rectangle
     * @param {string[]} sources The different sources of the audio file. This may be useful for cross-browser compatibility.
     */
    constructor(
        protected rectangle: Rectangle,
        sources: string[],
    ) {
        let videoContainer = document.querySelector("#cazan-videos-container")

        if (!videoContainer) {
            videoContainer = document.createElement("div")
            videoContainer.setAttribute("id", "cazan-videos-container")
            document.body.appendChild(videoContainer)
        }

        const id = `cazan-video-${videoContainer.children.length}`

        const video = document.createElement("video")
        video.setAttribute('id', id)
        video.setAttribute('style', 'display:none')

        super(id, video, sources)  // with this, `video` becomes `this.media`

        for (let source of sources) {
            let src = document.createElement("source")
            src.setAttribute("id", `cazan-video-${this.id}-source-${this.media.children.length}`)
            src.setAttribute("src", source)
            this.media.appendChild(src)
        }

        videoContainer.appendChild(this.media)


        this.media.addEventListener(
            "play",
            () => {
                this.process()
            },
            false,
        )
    }

    process() {
        // the media is paused, ended, or it's not a video, don't draw it
        if (this.media.paused || this.media.ended || this.media instanceof HTMLAudioElement) return

        this.rectangle.setImage(this.media)

        setTimeout(() => {
            this.process()
        }, 1000/this.rectangle.getGame().getCurrentFps())
    }
}
