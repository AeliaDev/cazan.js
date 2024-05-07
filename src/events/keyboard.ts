import {SetKeyboardHandlerInterface} from "../types/events"

export function setKeyboardHandler(options: SetKeyboardHandlerInterface) {
    !options.on ? options.on = "keydown" : undefined

    document.addEventListener(options.on, (event) => {
        event.preventDefault()
        if(options.shortcutCallback(event)) {
            options.callback()
        }
    })
}
