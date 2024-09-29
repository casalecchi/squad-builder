import { Position, Team } from '../models'

export const teamPositionMap: { [key in keyof Team]: Position } = {
    goalkeeper: 'gk',
    wingers: 'wb',
    defenders: 'cb',
    midfielders: 'mid',
    strikers: 'st',
}
