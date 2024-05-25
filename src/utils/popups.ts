import {PopupInterface} from "../types/events"

export class Popup {
    readonly data!: PopupInterface
    readonly popupElement!: HTMLElement

    constructor(options: PopupInterface) {
        this.data = options

        this.setDefaultOptions()

        let popup = document.querySelector("#cazan-popup")
        let popupStyleElement = document.querySelector("#cazan-popup-style")

        if(popup) {
            popup.remove()
        }

        if(!popupStyleElement) {
            let popupStyle = document.createElement('style')
            popupStyle.setAttribute('id', 'cazan-popup-style')
            popupStyle.setAttribute('type', 'text/css')
            popupStyle.textContent = "#cazan-popup{flex-direction: column;gap: 15px;padding: 10px;background-color: " +
                "#fff;color: #000;min-width: 200px;box-shadow: 0.5px 0.5px 5px 1px #111;border-radius: 1.5px;" +
                "font-family: monospace;}#cazan-popup h1{margin: 0;}#cazan-popup p{margin: 0;text-align: center;}" +
                "#cazan-popup div{display: flex;justify-content: space-around;}"
            document.head.appendChild(popupStyle)
        }

        let btn = options.type === "confirm"
            ? "<button id='cazan-popup-yes'>Yes</button> <button id='cazan-popup-no'>No</button>"
            : `<button id='cazan-popup-confirm'>${options.btnText}</button>`

        document.body.insertAdjacentHTML(
            "beforeend",
            `<div id="cazan-popup" style="display: none;position: fixed;top: 50%;left:50%;transform: translate(-50%,-50%);z-index: 1000 !important;">
                    <h1>${options.title}</h1>
                    <p>${options.msg}</p>
                    ${options.type === "prompt" 
                        ? `<input id="cazan-popup-input" type="text" name="cazan-popup-input" placeholder="${options.promptPlaceholder}" value="" />`
                        : ""} 
                    <div>${btn}</div>
                  </div>`)

        this.popupElement = document.querySelector('#cazan-popup')!

        if(options.type === "prompt") {
            document.querySelector('#cazan-popup-confirm')!.setAttribute('disabled', 'true')
        }
    }

    /**
     * Nota (for prompts):
     * - the input only handles characters, "Space" and "Backspace" yet. So the user can't use controls to copy/paste
     * strings, etc...
     * - if the input value length doesn't belong to the defined interval ([minLength; maxLength]), the button will be
     * disabled (by default, the interval is [0;255]).
     */
    async getResponse(): Promise<any> {
        this.popupElement.style.display = "flex"

        if(this.data.type === "show") {
            return new Promise((resolve, reject) => {
                document.querySelector('#cazan-popup-confirm')?.addEventListener(
                    'click',
                    () => {
                        resolve(true)
                    }
                )
            })
        } else if(this.data.type === "prompt") {
            return new Promise((resolve, reject) => {
                let inputElement: HTMLInputElement = document.querySelector("#cazan-popup-input")!
                let confirmBtnElement: HTMLButtonElement = document.querySelector("#cazan-popup-confirm")!

                inputElement.addEventListener('keydown', (event: KeyboardEvent) => {
                    event.preventDefault()

                    if(event.key === "Backspace") {
                        inputElement.value = inputElement.value.slice(0, -1)
                    } else if(event.key === "Space") {
                        inputElement.value += " "
                    } else if(event.key.length === 1) {
                        inputElement.value += event.key
                    }

                    if(
                        inputElement.value.length >= this.data.minLength!
                        && inputElement.value.length <= this.data.maxLength!
                        && !!confirmBtnElement.getAttribute('disabled')
                    ) {
                        confirmBtnElement.removeAttribute('disabled')

                    } else if(
                        (inputElement.value.length < this.data.minLength! || inputElement.value.length > this.data.maxLength!)
                        && !confirmBtnElement.getAttribute('disabled')
                    ) {
                        confirmBtnElement.setAttribute('disabled', "true")
                    }
                })

                document.querySelector("#cazan-popup-confirm")?.addEventListener(
                    'click',
                    () => {
                        let input: HTMLInputElement | null = document.querySelector("#cazan-popup-input")
                        if(input) {
                            resolve(input.value)
                        }
                    }
                )
            })
        } else if(this.data.type === "confirm") {
            return new Promise((resolve, reject) => {
                document.querySelector("#cazan-popup-yes")?.addEventListener(
                    "click",
                    () => {
                        resolve(true)
                    }
                )
                document.querySelector("#cazan-popup-no")?.addEventListener(
                    "click",
                    () => {
                        resolve(false)
                    }
                )
            })
        }

        return new Promise((resolve, reject) => reject("Type undefined"))
    }

    removePopup() {
        this.popupElement.remove()
    }

    setDefaultOptions() {
        if(!this.data.maxLength) {
            this.data.maxLength = 255
        }
        if(!this.data.minLength) {
            this.data.minLength = 0
        }
        if(!this.data.btnText) {
            this.data.btnText = "Confirm"
        }
        if(!this.data.promptPlaceholder) {
            this.data.promptPlaceholder = ""
        }
    }

    getData() {
        return this.data
    }

    getHTMLElement() {
        return this.popupElement
    }
}
