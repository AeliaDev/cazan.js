export class Audio {
    id!: string;
    audio!: HTMLAudioElement;

    /**
     * @param {string[]} sources The different sources of the audio file. This may be useful for cross-browser compatibility.
     */
    constructor(
        protected sources: string[],
    ) {
        let audioTracks = document.querySelector("#cazan-audio-tracks");

        if (audioTracks == null) {
            audioTracks = document.createElement("div");
            audioTracks.setAttribute("id", "cazan-audio-tracks");
            document.body.appendChild(audioTracks);
        }

        this.id = `cazan-audio-track-${audioTracks.children.length}`;
        this.audio = document.createElement("audio");
        this.audio.setAttribute("id", this.id);

        for (let source of sources) {
            let src = document.createElement("source");
            src.setAttribute("id", `${this.id}-source-${this.audio.children.length}`);
            src.setAttribute("src", source);
            this.audio.appendChild(src);
        }

        audioTracks.appendChild(this.audio);
    }

    /**
     * Plays the audio. (Continues from where it left off if paused)
     */
    play() {
        this.audio.play().then(_ =>
            console.log(`Audio ${this.id} started playing.`)
        );
    }

    /**
     * Pauses the audio.
     */
    pause() {
        this.audio.pause()
    }

    /**
     * Stops the audio. (Starts from the beginning if played again)
     */
    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    /**
     * Sets the volume of the audio.
     * @param {number} volume
     */
    setVolume(volume: number) {
        this.audio.volume = volume;
    }

    /**
     * Gets the volume of the audio.
     */
    getVolume() {
        return this.audio.volume;
    }

    /**
     * Sets if the audio should loop or not.
     * @param {boolean} loop
     */
    setLoop(loop: boolean) {
        this.audio.loop = loop;
    }

    /**
     * Gets if the audio is looping or not.
     */
    getLoop() {
        return this.audio.loop;
    }

    /**
     * Sets if the audio is muted or not.
     * @param {boolean} muted
     */
    setMuted(muted: boolean) {
        this.audio.muted = muted;
    }

    /**
     * Gets if the audio is muted or not.
     */
    getMuted() {
        return this.audio.muted;
    }

    /**
     * Sets the playback rate of the audio.
     * @param {number} playbackRate
     */
    setPlaybackRate(playbackRate: number) {
        this.audio.playbackRate = playbackRate;
    }

    /**
     * Gets the playback rate of the audio.
     */
    getPlaybackRate() {
        return this.audio.playbackRate;
    }

    /**
     * Sets the preload of the audio.
     * @param {"none" | "metadata" | "auto" | ""} preload
     */
    setPreload(preload: "none" | "metadata" | "auto" | "") {
        this.audio.preload = preload;
    }

    /**
     * Gets the preload of the audio.
     */
    getPreload() {
        return this.audio.preload;
    }

    /**
     * Sets if the audio should play automatically or not.
     * @param {boolean} autoplay
     */
    setAutoplay(autoplay: boolean) {
        this.audio.autoplay = autoplay;
    }

    /**
     * Gets if the audio should play automatically or not.
     */
    getAutoplay() {
        return this.audio.autoplay;
    }

    /**
     * Sets the current time of the audio.
     * @param {number} currentTime
     */
    setCurrentTime(currentTime: number) {
        this.audio.currentTime = currentTime;
    }

    /**
     * Gets the current time of the audio.
     */
    getCurrentTime() {
        return this.audio.currentTime;
    }

    /**
     * Sets the default muted state of the audio.
     * @param {boolean} defaultMuted
     */
    setDefaultMuted(defaultMuted: boolean) {
        this.audio.defaultMuted = defaultMuted;
    }

    /**
     * Gets the default muted state of the audio.
     */
    getDefaultMuted() {
        return this.audio.defaultMuted;
    }

    /**
     * Sets the default playback rate of the audio.
     * @param {number} defaultPlaybackRate
     */
    setDefaultPlaybackRate(defaultPlaybackRate: number) {
        this.audio.defaultPlaybackRate = defaultPlaybackRate;
    }

    /**
     * Gets the default playback rate of the audio.
     */
    getDefaultPlaybackRate() {
        return this.audio.defaultPlaybackRate;
    }

    /**
     * Sets if the audio should be prevented from downloading.
     * @param {boolean} disableRemotePlayback
     */
    setDisableRemotePlayback(disableRemotePlayback: boolean) {
        this.audio.disableRemotePlayback = disableRemotePlayback;
    }

    /**
     * Gets if the audio should be prevented from downloading.
     */
    getDisableRemotePlayback() {
        return this.audio.disableRemotePlayback;
    }

    /**
     * Gets the duration of the audio.
     */
    getDuration() {
        return this.audio.duration;
    }

    /**
     * Gets if the audio has ended or not.
     */
    getEnded() {
        return this.audio.ended;
    }

    /**
     * Gets if an error occurred while loading the audio.
     */
    getError() {
        return this.audio.error;
    }

}
