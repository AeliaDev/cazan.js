
export class Multimedia {
    constructor(
        protected id: string,
        protected media: HTMLAudioElement | HTMLVideoElement,
        protected sources: string[],
    ) {
    }

    /**
     * Update sources.
     * @param sources
     */
    setSources(sources: string[]) {
        this.sources = sources
    }

    /**
     * Returns the current sources
     */
    getSources() {
        return this.sources
    }

    /**
     * Plays the media. (Continues from where it left off if paused)
     */
    play() {
        this.media.play().then(() => {
            console.log(`${this.id} media started playing.`)
        })
    }

    /**
     * Pauses the media.
     */
    pause() {
        this.media.pause()
    }

    /**
     * Stops the media. (Starts from the beginning if played again)
     */
    stop() {
        this.media.pause()
        this.media.currentTime = 0
    }

    /**
     * Sets the volume of the media.
     * @param {number} volume
     */
    setVolume(volume: number) {
        this.media.volume = volume
    }

    /**
     * Gets the volume of the media.
     */
    getVolume() {
        return this.media.volume
    }

    /**
     * Sets if the media should loop or not.
     * @param {boolean} loop
     */
    setLoop(loop: boolean) {
        this.media.loop = loop
    }

    /**
     * Gets if the media is looping or not.
     */
    getLoop() {
        return this.media.loop
    }

    /**
     * Sets if the media is muted or not.
     * @param {boolean} muted
     */
    setMuted(muted: boolean) {
        this.media.muted = muted
    }

    /**
     * Gets if the media is muted or not.
     */
    getMuted() {
        return this.media.muted
    }

    /**
     * Sets the playback rate of the media.
     * @param {number} playbackRate
     */
    setPlaybackRate(playbackRate: number) {
        this.media.playbackRate = playbackRate
    }

    /**
     * Gets the playback rate of the media.
     */
    getPlaybackRate() {
        return this.media.playbackRate
    }

    /**
     * Sets the preload of the media.
     * @param {"none" | "metadata" | "auto" | ""} preload
     */
    setPreload(preload: "none" | "metadata" | "auto" | "") {
        this.media.preload = preload
    }

    /**
     * Gets the preload of the media.
     */
    getPreload() {
        return this.media.preload
    }

    /**
     * Sets if the media should play automatically or not.
     * @param {boolean} autoplay
     */
    setAutoplay(autoplay: boolean) {
        this.media.autoplay = autoplay
    }

    /**
     * Gets if the media should play automatically or not.
     */
    getAutoplay() {
        return this.media.autoplay
    }

    /**
     * Sets the current time of the media.
     * @param {number} currentTime
     */
    setCurrentTime(currentTime: number) {
        this.media.currentTime = currentTime
    }

    /**
     * Gets the current time of the media.
     */
    getCurrentTime() {
        return this.media.currentTime
    }

    /**
     * Sets the default muted state of the media.
     * @param {boolean} defaultMuted
     */
    setDefaultMuted(defaultMuted: boolean) {
        this.media.defaultMuted = defaultMuted
    }

    /**
     * Gets the default muted state of the media.
     */
    getDefaultMuted() {
        return this.media.defaultMuted
    }

    /**
     * Sets the default playback rate of the media.
     * @param {number} defaultPlaybackRate
     */
    setDefaultPlaybackRate(defaultPlaybackRate: number) {
        this.media.defaultPlaybackRate = defaultPlaybackRate
    }

    /**
     * Gets the default playback rate of the media.
     */
    getDefaultPlaybackRate() {
        return this.media.defaultPlaybackRate
    }

    /**
     * Sets if the media should be prevented from downloading.
     * @param {boolean} disableRemotePlayback
     */
    setDisableRemotePlayback(disableRemotePlayback: boolean) {
        this.media.disableRemotePlayback = disableRemotePlayback
    }

    /**
     * Gets if the media should be prevented from downloading.
     */
    getDisableRemotePlayback() {
        return this.media.disableRemotePlayback
    }

    /**
     * Gets the duration of the media.
     */
    getDuration() {
        return this.media.duration
    }

    /**
     * Gets if the media has ended or not.
     */
    getEnded() {
        return this.media.ended
    }

    /**
     * Gets if an error occurred while loading the media.
     */
    getError() {
        return this.media.error
    }
}
