export class Audio {
    id!: string;
    audio!: HTMLAudioElement;

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

    play() {
        this.audio.play().then(_ =>
            console.log(`Audio ${this.id} started playing.`)
        );
    }

    pause() {
        this.audio.pause()
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    setVolume(volume: number) {
        this.audio.volume = volume;
    }

    getVolume() {
        return this.audio.volume;
    }

    setLoop(loop: boolean) {
        this.audio.loop = loop;
    }

    getLoop() {
        return this.audio.loop;
    }

    setMuted(muted: boolean) {
        this.audio.muted = muted;
    }

    getMuted() {
        return this.audio.muted;
    }

    setPlaybackRate(playbackRate: number) {
        this.audio.playbackRate = playbackRate;
    }

    getPlaybackRate() {
        return this.audio.playbackRate;
    }

    setPreload(preload: "none" | "metadata" | "auto" | "") {
        this.audio.preload = preload;
    }

    getPreload() {
        return this.audio.preload;
    }

    setAutoplay(autoplay: boolean) {
        this.audio.autoplay = autoplay;
    }

    getAutoplay() {
        return this.audio.autoplay;
    }

    setControls(controls: boolean) {
        this.audio.controls = controls;
    }

    getControls() {
        return this.audio.controls;
    }

    setCurrentTime(currentTime: number) {
        this.audio.currentTime = currentTime;
    }

    getCurrentTime() {
        return this.audio.currentTime;
    }

    setDefaultMuted(defaultMuted: boolean) {
        this.audio.defaultMuted = defaultMuted;
    }

    getDefaultMuted() {
        return this.audio.defaultMuted;
    }

    setDefaultPlaybackRate(defaultPlaybackRate: number) {
        this.audio.defaultPlaybackRate = defaultPlaybackRate;
    }

    getDefaultPlaybackRate() {
        return this.audio.defaultPlaybackRate;
    }

    setDisableRemotePlayback(disableRemotePlayback: boolean) {
        this.audio.disableRemotePlayback = disableRemotePlayback;
    }

    getDisableRemotePlayback() {
        return this.audio.disableRemotePlayback;
    }

    getDuration() {
        return this.audio.duration;
    }

    getEnded() {
        return this.audio.ended;
    }

    getError() {
        return this.audio.error;
    }

}