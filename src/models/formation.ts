export interface Formation {
    id: string
    defendersQuantity: number
    playersPositions: Position[]
}

export interface Position {
    code: string
    bottom: string
    left: string
}
