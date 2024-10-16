import { Player } from '.'

export interface Team {
    goalkeeper: Player[]
    wingers: Player[]
    defenders: Player[]
    midfielders: Player[]
    strikers: Player[]
    manager: Player[]
}
