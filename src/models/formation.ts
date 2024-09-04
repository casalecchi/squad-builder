export interface Formation {
    id: string
    goalkeeperPosition: Position
    defendersPositions: Position[]
    midfieldersPositions: Position[]
    strikersPositions: Position[]
}

export interface Position {
    code: string
    bottom: string
    left: string
}
