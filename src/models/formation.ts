export interface Formation {
    id: string
    goalkeeperPositions: PlayerArea[]
    wingersPositions: PlayerArea[]
    defendersPositions: PlayerArea[]
    midfieldersPositions: PlayerArea[]
    strikersPositions: PlayerArea[]
}

export interface PlayerArea {
    code: string
    bottom: string
    left: string
}
