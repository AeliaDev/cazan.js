# Multimedia

## Classes

### ``Multimedia``

``Multimedia`` is the parent class for ``Audio`` and for ``Video``.

#### ``constructor(id: string, media: HTMLAudioElement | HTMLVideoElement, sources: string[]): void``

- ``id``: id of the resource.
- ``media``: HTML element that displays the media on the DOM.
- ``sources``: list of different paths to the medias, could be useful for cross-browser compatibility.

#### ``setSources(sources: string[]): void``

Update sources.

#### ``getSources(): string[]``

Returns sources.

#### ``play(): void``

Plays the media.

Continues from where it left off if paused.

#### ``pause(): void``

Pauses the media.

#### ``stop(): void``

Stops the media.

Starts from the beginning if played again.

#### ``setVolume(volume: number): void``

Set volume.

#### ``getVolume(): number``

Returns the current volume.

#### ``setLoop(loop: boolean): void``

Sets if the media should loop or not.

#### ``getLoop(): boolean``

Returns true if the media is looping, returns false otherwise.

#### ``setMuted(muted: boolean): void``

Sets if the media is muted or not.

#### ``getMuted(): boolean``

Returns true if the media is muted, false otherwise.

#### ``setPlaybackRate(playbackRate: number): void``

Sets the playback rate of the media.

#### ``getPlaybackRate(): number``

Returns the playback rate of the media.

#### ``setPreload(preload: string): void``

Sets the preload method of the media.

Nota: `preload`: "none" | "metadata" | "auto" | ""

#### ``getPreload(): string``

Returns the preload method of the media.

Nota: `preload` returned: "none" | "metadata" | "auto" | ""

#### ``setAutoplay(autoplay: boolean): void``

Sets if the media should play automatically or not.

#### ``getAutoplay(): boolean``

Returns true if the media is autoplaying, false otherwise.

#### ``setCurrentTime(currentTime: number): void``

Sets the current time of the media.

#### ``getCurrentTime(): number``

Returns the current time of the media.

#### ``setDefaultMuted(defaultMuted: boolean): void``

Sets the default muted state of the media.

#### ``getDefaultMuted(): boolean``

Returns the default muted state of the media.

#### ``setDefaultPlaybackRate(defaultPlaybackRate: number): void``

Sets the default playback rate of the media.

#### ``getDefaultPlaybackRate(): number``

Returns the default playback rate of the media.

#### ``setDisableRemotePlayback(disableRemotePlayback: boolean): void``

Sets if the media should be prevented from downloading.

#### ``getDisableRemotePlayback(): void``

Returns if the media should be prevented from downloading.

#### ``getDuration(): number``

Returns the duration of the media.

#### ``getEnded(): boolean``

Returns true if the media has ended, false otherwise.

#### ``getError(): MediaError | null``

Verify if an error occurred while loading the media.

### ``Audio``

``Audio`` extends ``Multimedia``.

#### ``constructor(sources: string[]): void``

Sets up the audio player in the DOM.

### ``Video``

``Video`` extends ``Multimedia``.

#### ``constructor(rectangle: Rectangle, sources: string[]): void``

The rectangle needed is necessary to display the images on the canvas. Consider it as a kind of screen.

The sources are already described in ``Multimedia`` constructor.


