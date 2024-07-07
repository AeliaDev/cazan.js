# Popup API

## Classes

### ``Popup``

#### ``constructor(options: PopupInterface)``

Constructor of the Popup class. Cf. ``PopupInterface`` for more information about arguments.

It creates the popup in the DOM.

#### ``async getResponse(): Promise<any>``

Get the response of the popup. It could be a boolean or a string depending on the type set (confirm, show or prompt).

For prompts: if the input value length doesn't belong to the defined interval ([minLength; maxLength]), the button will
be disabled (by default, the interval is [0;255])

#### ``removePopup(): void``

Removes the popup from the DOM.

#### ``setDefaultOptions(): void``

If some required fields aren't specified, this method sets them with the default values.

- ``maxLength``: 255

- ``minLength``: 0

- ``btnText``: Confirm

- ``promptPlaceholder``: ""

#### ``getData(): PopupInterface``

Get fields values.

#### ``getHtmlElement(): HTMLElement``

Get the popup's DOM element.

## Functions

For more information about the ``IOEventInterface`` for typing parameters, please see at the "Interface" section on this
page.

### ``async showMsg(options: IOEventInterface)``

Use it when you want to tell to the user an important message, such as an announcement or an error, for example.

### ``async getUserConfirm(options: IOEventInterface)``

Use it when you want a confirmation from the user to proceed to an action, etc...

### ``async getUserInput(options: IOEventInterface)``

Use it when you want a text input from a user.

## Interfaces

### ``IOEventInterface``

- ``title``: string

- ``msg``: string

- ``btnText``: string (optional)

Specific for "prompt" mode:

- ``promptPlaceholder``: string (optional)

- ``maxLength``: number (optional)

- ``minLength``: number (optional)

### ``PopupInterface``

``PopupInterface`` extends ``IOEventInterface``.

- ``type``: "show" | "prompt" | "confirm"
