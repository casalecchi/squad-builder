export interface Formation {
    id: string
    goalkeeperPositions: Position[]
    wingersPositions: Position[]
    defendersPositions: Position[]
    midfieldersPositions: Position[]
    strikersPositions: Position[]
}

export interface Position {
    code: string
    bottom: string
    left: string
}
