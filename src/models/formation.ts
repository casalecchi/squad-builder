import { PlayerArea } from '.'

export interface Formation {
    id: string
    goalkeeperPositions: PlayerArea[]
    wingersPositions: PlayerArea[]
    defendersPositions: PlayerArea[]
    midfieldersPositions: PlayerArea[]
    strikersPositions: PlayerArea[]
}
