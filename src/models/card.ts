import { Position } from './position'
import { PlayerStats } from './stats'
import { CardTabColumn, CardTabEnum } from './tab'

export interface CardDetail {
    title: string
    attributes: (keyof PlayerStats)[]
    unit: Unit
    interval: { max: number }
    positionsNotAllowed: Position[]
    tab: CardTabEnum
    column?: CardTabColumn
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
    | 'expectedGoals'
    | 'expectedAssists'
