# Audio

There's how to use cazan audio's API. We'll using the ``cazan.assets`` namespace here.

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

<br/><br/>

That's it.

## Reference

````ts
class Audio {
	protected sources: string[];
	id: string;
	audio: HTMLAudioElement;
    
	/**
	 * @param {string[]} sources The different sources of the audio file. This may be useful for cross-browser compatibility.
	 */
	constructor(sources: string[]);
	
    /**
	 * Plays the audio. (Continues from where it left off if paused)
	 */
	play(): void;
	
    /**
	 * Pauses the audio.
	 */
	pause(): void;
	
    /**
	 * Stops the audio. (Starts from the beginning if played again)
	 */
	stop(): void;
	
    /**
	 * Sets the volume of the audio.
	 * @param {number} volume
	 */
	setVolume(volume: number): void;
	
    /**
	 * Gets the volume of the audio.
	 */
	getVolume(): number;
	
    /**
	 * Sets if the audio should loop or not.
	 * @param {boolean} loop
	 */
	setLoop(loop: boolean): void;
	
    /**
	 * Gets if the audio is looping or not.
	 */
	getLoop(): boolean;
	
    /**
	 * Sets if the audio is muted or not.
	 * @param {boolean} muted
	 */
	setMuted(muted: boolean): void;
	
    /**
	 * Gets if the audio is muted or not.
	 */
	getMuted(): boolean;
	
    /**
	 * Sets the playback rate of the audio.
	 * @param {number} playbackRate
	 */
	setPlaybackRate(playbackRate: number): void;
	
    /**
	 * Gets the playback rate of the audio.
	 */
	getPlaybackRate(): number;
	
    /**
	 * Sets the preload of the audio.
	 * @param {"none" | "metadata" | "auto" | ""} preload
	 */
	setPreload(preload: "none" | "metadata" | "auto" | ""): void;
	
    /**
	 * Gets the preload of the audio.
	 */
	getPreload(): "" | "metadata" | "auto" | "none";
	
    /**
	 * Sets if the audio should play automatically or not.
	 * @param {boolean} autoplay
	 */
	setAutoplay(autoplay: boolean): void;
	
    /**
	 * Gets if the audio should play automatically or not.
	 */
	getAutoplay(): boolean;
	
    /**
	 * Sets the current time of the audio.
	 * @param {number} currentTime
	 */
	setCurrentTime(currentTime: number): void;
	
    /**
	 * Gets the current time of the audio.
	 */
	getCurrentTime(): number;
	
    /**
	 * Sets the default muted state of the audio.
	 * @param {boolean} defaultMuted
	 */
	setDefaultMuted(defaultMuted: boolean): void;
	
    /**
	 * Gets the default muted state of the audio.
	 */
	getDefaultMuted(): boolean;
	
    /**
	 * Sets the default playback rate of the audio.
	 * @param {number} defaultPlaybackRate
	 */
	setDefaultPlaybackRate(defaultPlaybackRate: number): void;
	
    /**
	 * Gets the default playback rate of the audio.
	 */
	getDefaultPlaybackRate(): number;
	
    /**
	 * Sets if the audio should be prevented from downloading.
	 * @param {boolean} disableRemotePlayback
	 */
	setDisableRemotePlayback(disableRemotePlayback: boolean): void;
	
    /**
	 * Gets if the audio should be prevented from downloading.
	 */
	getDisableRemotePlayback(): boolean;
	
    /**
	 * Gets the duration of the audio.
	 */
	getDuration(): number;
	
    /**
	 * Gets if the audio has ended or not.
	 */
	getEnded(): boolean;
	
    /**
	 * Gets if an error occurred while loading the audio.
	 */
	getError(): MediaError | null;
}
````
