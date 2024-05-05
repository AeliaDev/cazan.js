import {SetKeyboardHandlerInterface} from "../types/events"

export function setKeyboardHandler(options: SetKeyboardHandlerInterface) {
    document.addEventListener(options.on, (event) => {
        event.preventDefault()
        if(options.shortcutCallback(event)) {
            options.callback()
        }
    })
}
