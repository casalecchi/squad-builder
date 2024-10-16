import { PlayerArea } from '.'

export interface Formation {
    id: string
    goalkeeper: PlayerArea[]
    wingers: PlayerArea[]
    defenders: PlayerArea[]
    midfielders: PlayerArea[]
    strikers: PlayerArea[]
    manager: PlayerArea[]
}
