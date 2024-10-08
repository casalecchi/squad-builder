import { Position } from './position'
import { Status } from './status'

export interface Player {
    id: number
    clubId: number
    position: Position
    status: Status
    name: string
    price: number
    average?: number
    lastPoint?: number
    totalGames?: number
    priceVariation?: number
    photo: string
}

export interface PlayerArea {
    code: string
    bottom: string
    left: string
}
