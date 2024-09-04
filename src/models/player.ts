export interface Player {
    id: number
    teamId: number
    positionId: number
    statusId: number
    name: string
    price: number
    priceVariation?: number
    photo: string
}

export interface Team {
    goalkeeper: Player[]
    wingers: Player[]
    defenders: Player[]
    midfielders: Player[]
    strikers: Player[]
}
