
/**
 * for further infos : https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#line_styles
 */
export declare interface LineStyleInterface {
    width?: number
    cap?: string & ("butt" | "round" | "square")
    join?: string & ("round" | "bevel" | "miter")
    miterLimit?: number
    dash?: [number, number]
    dashOffset?: number
}

/**
 * for further infos: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text#styling_text
 */

export declare interface TextStyleInterface {
    font?: string
    textAlign?: string & ("start" | "end" | "left" | "right" | "center")
    textBaseline?: string & ("top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom")
    direction?: string & ("ltr" | "rtl" | "inherit")
}
