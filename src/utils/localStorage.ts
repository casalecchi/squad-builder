import { fourThreeThree } from '../constants'
import { Formation, PlayerStats, Team } from '../models'

export const getLocalFormation = () => {
    return JSON.parse(localStorage.getItem('formation') ?? JSON.stringify(fourThreeThree))
}

export const setLocalFormation = (formation: Formation) => {
    return localStorage.setItem('formation', JSON.stringify(formation))
}

export const getLocalStats = () => {
    return JSON.parse(localStorage.getItem('stats') ?? JSON.stringify({ stats: [] }))
        .stats as PlayerStats[]
}

export const setLocalStats = (stats: PlayerStats[]) => {
    return localStorage.setItem('stats', JSON.stringify({ stats: stats }))
}

export const getLocalTeam = () => {
    return JSON.parse(
        localStorage.getItem('team') ??
            JSON.stringify({
                goalkeeper: [],
                wingers: [],
                defenders: [],
                midfielders: [],
                strikers: [],
            })
    )
}

export const setLocalTeam = (team: Team) => {
    localStorage.setItem('team', JSON.stringify(team))
}
