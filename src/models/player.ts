import { Position } from '.'

export interface Player {
    id: number
    clubId: number
    position: Position
    statusId: number
    name: string
    price: number
    priceVariation?: number
    photo: string
}

export interface PlayerStatus {
    [key: number]: {
        id: number
        name: string
        abbreviation: string
    }
}

export interface PlayerArea {
    code: string
    bottom: string
    left: string
}
