import { Status } from './status'

export interface Player {
    id: number
    clubId: number
    positionCode: string
    status: Status
    name: string
    price: number
    priceVariation?: number
    photo: string
}

export interface PlayerArea {
    code: string
    bottom: string
    left: string
}
