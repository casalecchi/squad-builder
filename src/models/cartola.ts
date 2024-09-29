export interface Club {
    id: number
    name: string
    abbreviation: string
    photo: string
}

export interface Clubs {
    [key: number]: Club
}

export interface Matchup {
    homeClubId: number
    awayClubId: number
}

export interface Matches {
    [key: number]: JSX.Element
}

export interface MarketInfo {
    status: 'closed' | 'open'
    round: number
}
