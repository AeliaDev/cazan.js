
/*
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
