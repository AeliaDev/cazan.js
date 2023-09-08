import {SetKeyboardShortcutInterface} from "../types/events"

export function setShortcutHandler(options: SetKeyboardShortcutInterface) {
    document.addEventListener(options.on, (event) => {
        event.preventDefault()
        if(options.shortcutCallback(event)) {
            options.callback()
        }
    })
}
