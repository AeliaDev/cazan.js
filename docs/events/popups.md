# cazan popups

Cazan provides a system of popups to simplify I/O interactions with the user.


## Using the events.io API

You can use the cazan I/O API to use popups. We are using the ``cazan.events.io`` namespace in this section.

### ``io.showMsg()``

Use it when you want to tell to the user an important message, such as an announcement or an error, for example.

````js
await io.showMsg({title: "myGame", msg: 'Unknown error', btnText: "Ok"})
````

### ``io.getUserConfirm()``

Use it when you want a confirmation from the user to proceed to an action, etc...

````js
let isUserReady = await io.getUserConfirm({title: "myGame", msg: 'Are you ready?'})
````

### ``io.getUserInput()``

Use it when you want a text input from a user.

````js
let username = await io.getUserInput({
    title: "myGame", 
    msg: "What's your name?", 
    promptPlaceholder: "John Doe, ..."
})
````

!!!info
    The user won't be able to click on the confirm button if the input does not belong to [minLength; maxLength] (if not defined, it's [0;255])


## Using the Popup API

You can choose to use directly the Popup API. We are using the ``cazan.utils`` namespace here.

````js
const popup = new utils.Popup({
    title: "myGame",
    msg: "Hi, how are you?",
    btnText: 'Submit',
    promptPlaceholder: "fine, sad, ...",
    minLength: 2,
    maxLength: 10,
    type: "prompt"
})
let userResponse = await popup.getResponse()
popup.removePopup() //(1)!
````

1. Mandatory for remove the popup after the interaction.

## Customizing popups styling

By default, cazan applies a default style on popups;

??? info "cazan popups' default style"
    ````css
    #cazan-popup{
        flex-direction: column; gap: 15px;
        padding: 10px;
        background-color: #fff; color: #000;
        min-width: 200px;
        box-shadow: 0.5px 0.5px 5px 1px #111;
        border-radius: 1.5px;
        font-family: monospace;
    }
    #cazan-popup h1 { margin: 0; }
    #cazan-popup p { margin: 0; text-align: center; }
    #cazan-popup div { display: flex; justify-content: space-around; }
    ````
In fact, it appends a `<style id="cazan-popup-style" text="text/css">` in the end of the `<head>` of your HTML document.

!!!tip
    But if you define manually this HTML tag and putting in custom CSS to customize the popups, Cazan won't override it, and your popup will be customized.

!!! warning
    Attention: you can customize everything you want but if you want that it keeps working, don't customize `display`, `position` or `z-index`, these properties are needed because they will be used by cazan.

## Reference

- I/O API: ``IOEventInterface`` is used for typing ``io.showMsg()``, ``io.getUserConfirm()`` and ``io.getUserInput()`` params.
````ts
interface IOEventInterface {
    title: string
    msg: string
    btnText?: string

    /** only for "prompt" mode */
    promptPlaceholder?: string
    maxLength?: number
    minLength?: number
}
````

- Popup : this interface is used to create a new popup (thats the same as ``IOEventInterface`` but with a `type` added).
````ts
interface PopupInterface extends IOEventInterface {
    type: "show" | "prompt" | "confirm"
}
````
