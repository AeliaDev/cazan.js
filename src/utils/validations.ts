
export function validateRgbaString(rgba: string) {
    const regex: RegExp = /rgba\(\d{1,3}\,\d{1,3}\,\d{1,3}\,\d{0,1}(\.\d+)?\)/  // TODO: update this regex : it's possible to put an alpha 0 -> 1.99 (wanted 0 -> 1)
    return regex.test(rgba)
}
