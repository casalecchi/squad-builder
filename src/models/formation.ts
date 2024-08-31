export interface Formation {
    id: number
    defenseQuantity: number
    playersPositions: Position[]
}

export interface Position {
    code: string
    bottom: string
    left: string
}
