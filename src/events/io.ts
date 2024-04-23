import {IOEventInterface, PopupInterface} from "../types/events"
import {Popup} from "../utils"

async function ioEventBase(options: PopupInterface) {
    const popup = new Popup({...options})
    const response = await popup.getResponse()
    popup.removePopup()
    return response
}

export async function showMsg(options: IOEventInterface) {
    return await ioEventBase({...options, type: "show"})
}

export async function getUserConfirm(options: IOEventInterface) {
    return await ioEventBase({...options, type: "confirm"})
}

export async function getUserInput(options: IOEventInterface) {
    return await ioEventBase({...options, type: "prompt"})
}
