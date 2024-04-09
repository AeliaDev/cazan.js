/**
 * Nota: these functions will be changed to add a popup in html that will be customizable by the game developer
 */

export function showMsg(msg: string) {
    alert(msg)
}

export function getUserConfirm(msg: string) {
    return confirm(msg)
}

export function getUserInput(msg: string, defaultValue?: string) {
    return prompt(msg, defaultValue)
}
