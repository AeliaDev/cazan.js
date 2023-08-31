
export interface ExceptionOptionsInterface {
    filename: string
    message?: string
}

export interface ExceptionInterface {
    throws(options: ExceptionOptionsInterface): void
}
