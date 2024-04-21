# Multimedia

Cazan brings with it a Multimedia API, here to help you to add sounds and videos in your games. You will learn how to use this API in this section.

## Reference

There's the references of ``Multimedia``. `Audio` and `Video` are children of this class so these methods can be used for them.

````ts
class Multimedia {
    constructor(
        protected id: string,
        protected media: HTMLAudioElement | HTMLVideoElement,
        protected sources: string[],
    ) {}

    /**
     * Update sources.
     * @param sources
     */
    setSources(sources: string[]): void {}

    /**
     * Returns the current sources
     */
    getSources(): string[] {}

    /**
     * Plays the media. (Continues from where it left off if paused)
     */
    play(): void {}

    /**
     * Pauses the media.
     */
    pause(): void {}

    /**
     * Stops the media. (Starts from the beginning if played again)
     */
    stop(): void {}

    /**
     * Sets the volume of the media.
     * @param {number} volume
     */
    setVolume(volume: number): void {}

    /**
     * Gets the volume of the media.
     */
    getVolume(): number {}

    /**
     * Sets if the media should loop or not.
     * @param {boolean} loop
     */
    setLoop(loop: boolean): void {}

    /**
     * Gets if the media is looping or not.
     */
    getLoop(): boolean {}

    /**
     * Sets if the media is muted or not.
     * @param {boolean} muted
     */
    setMuted(muted: boolean): void {}

    /**
     * Gets if the media is muted or not.
     */
    getMuted(): boolean {}

    /**
     * Sets the playback rate of the media.
     * @param {number} playbackRate
     */
    setPlaybackRate(playbackRate: number): void {}

    /**
     * Gets the playback rate of the media.
     */
    getPlaybackRate(): number {}

    /**
     * Sets the preload of the media.
     * @param {"none" | "metadata" | "auto" | ""} preload
     */
    setPreload(preload: "none" | "metadata" | "auto" | ""): void {}

    /**
     * Gets the preload of the media.
     */
    getPreload(): "none" | "metadata" | "auto" | "" {}

    /**
     * Sets if the media should play automatically or not.
     * @param {boolean} autoplay
     */
    setAutoplay(autoplay: boolean): void {}

    /**
     * Gets if the media should play automatically or not.
     */
    getAutoplay(): boolean {}

    /**
     * Sets the current time of the media.
     * @param {number} currentTime
     */
    setCurrentTime(currentTime: number): void {}

    /**
     * Gets the current time of the media.
     */
    getCurrentTime(): number {}

    /**
     * Sets the default muted state of the media.
     * @param {boolean} defaultMuted
     */
    setDefaultMuted(defaultMuted: boolean): void {}

    /**
     * Gets the default muted state of the media.
     */
    getDefaultMuted(): boolean {}

    /**
     * Sets the default playback rate of the media.
     * @param {number} defaultPlaybackRate
     */
    setDefaultPlaybackRate(defaultPlaybackRate: number): void {}

    /**
     * Gets the default playback rate of the media.
     */
    getDefaultPlaybackRate(): number {}

    /**
     * Sets if the media should be prevented from downloading.
     * @param {boolean} disableRemotePlayback
     */
    setDisableRemotePlayback(disableRemotePlayback: boolean): void {}

    /**
     * Gets if the media should be prevented from downloading.
     */
    getDisableRemotePlayback(): boolean {}

    /**
     * Gets the duration of the media.
     */
    getDuration(): number {}

    /**
     * Gets if the media has ended or not.
     */
    getEnded(): boolean {}

    /**
     * Gets if an error occurred while loading the media.
     */
    getError(): MediaError {}
}
````
