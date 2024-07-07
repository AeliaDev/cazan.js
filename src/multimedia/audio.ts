import {Multimedia} from "./multimedia"

export class Audio extends Multimedia {
    /**
     * @param {string[]} sources The different sources of the audio file. This may be useful for cross-browser compatibility.
     */
    constructor(sources: string[]) {
        let audioTracks = document.querySelector("#cazan-audio-tracks")

        if (audioTracks == null) {
            audioTracks = document.createElement("div")
            audioTracks.setAttribute("id", "cazan-audio-tracks")
            document.body.appendChild(audioTracks)
        }

        const id = `cazan-audio-track-${audioTracks.children.length}`
        const audio = document.createElement("audio")
        audio.setAttribute("id", id)

        super(id, audio, sources)  // with this, `audio` becomes `this.media`

        for (let source of sources) {
            let src = document.createElement("source")
            src.setAttribute("id", `${this.id}-source-${this.media.children.length}`)
            src.setAttribute("src", source)
            this.media.appendChild(src)
        }

        audioTracks.appendChild(this.media)
    }
}
