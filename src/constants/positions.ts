import { Position, Team } from '../models'

export const positionIdMap: { [key: number]: Position } = {
    1: 'gk',
    2: 'wb',
    3: 'cb',
    4: 'mid',
    5: 'st',
    6: 'man',
}

export const teamPositionMap: { [key in keyof Team]: Position } = {
    goalkeeper: 'gk',
    wingers: 'wb',
    defenders: 'cb',
    midfielders: 'mid',
    strikers: 'st',
}
