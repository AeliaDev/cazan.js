
export declare interface SetKeyboardShortcutInterface {
    on: string & ('keyup' | 'keydown')
    /**
     * Define the key combination of the shortcut here.
     * More information on how to set custom keyboard shortcuts : https://stackoverflow.com/a/60279187/21402860
     *
     * ------------------------------------------------------------------------------------------
     * N.B: this function needs only to return a boolean. You only need to set a condition in it.
     *
     * e.g: for ctrl+s
     * ```js
     * (event) => (event.ctrlKey || event.metaKey) && event.key === 's'
     * ```
     *
     * @param {Event} event
     * @returns {boolean}
     */
    shortcutCallback: (event: KeyboardEvent) => boolean
    /**
     * The code to call when the event is detected.
     */
    callback: () => void
}

export declare interface IOEventInterface {
    title: string
    msg: string
    btnText?: string

    /** for "prompt" mode */
    promptPlaceholder?: string
    maxLength?: number
    minLength?: number
}

export declare interface PopupInterface extends IOEventInterface {
    type: "show" | "prompt" | "confirm"
}
