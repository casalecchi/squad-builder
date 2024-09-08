export interface Club {
    id: number
    name: string
    abbreviation: string
    photo: string
}

export interface Clubs {
    [key: number]: Club
}
