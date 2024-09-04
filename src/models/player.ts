export interface Player {
    id: number
    name: string
    positionCode: string
}

export interface Team {
    goalkeeper: Player[]
    wingers: Player[]
    defenders: Player[]
    midfielders: Player[]
    strikers: Player[]
}
