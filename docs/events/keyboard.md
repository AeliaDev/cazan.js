# Keyboard events

In this page we'll use the ``cazan.events.keyboard`` namespace.

## Demonstration

!!!example
    There's a little example:
    ````js
    keyboard.setKeyboardHandler({
        on: 'keydown', //(1)!
        shortcutCallback: (event) => event.key === 'ArrowLeft', //(2)!
        callback: () => { //(3)!
            myRect.setPosition({
                x: myRect.getPosition().x - 10,
                y: myRect.getPosition().y
            })
        }
    })
    ````

    1. Define the type of the keyboard listener (`keydown` or `keyup`).
    2. That's here that you define the keys to press, so this function must return a boolean.
    3. The function that will be called if the keys are pressed.

    This example consists of moving of 10px on the left a rectangle when the left arrow is pressed.

!!! warning
    If you want to use a shortcut with ctrl, you should put ``(event.ctrlKey || event.metaKey)`` for multiplatform compatibility.


## Reference

``SetKeyboardHandlerInterface`` is used for typing ``keyboard.setKeyboardHandler()`` params.

````ts
interface SetKeyboardHandlerInterface {
    on: string & ('keyup' | 'keydown')
    /**
     * Define the key combination of the event here.
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
     * @param {KeyboardEvent} event
     * @returns {boolean}
     */
    shortcutCallback: (event: KeyboardEvent) => boolean
    /**
     * The code to call when the event is detected.
     */
    callback: () => void
}
````
