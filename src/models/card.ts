import { Position } from './position'
import { PlayerStats } from './stats'

export interface CardDetail {
    title: string
    attributes: (keyof PlayerStats)[]
    unit: Unit
    interval: { max: number }
    positionsNotAllowed: Position[]
    negative?: boolean
}

export type Unit =
    | 'goals'
    | 'assists'
    | 'shots'
    | 'fouls'
    | 'saves'
    | 'cleanSheet'
    | 'tackleWon'
    | 'penalties'
    | 'offsides'
    | 'cards'
