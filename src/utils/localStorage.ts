import { fourThreeThree } from '../constants'
import { Formation, PlayerStats, Team } from '../models'

const FORMATION_VERSION = '1.0.0'
const STATS_VERSION = '1.0.0'
const TEAM_VERSION = '1.0.0'

const getLocalValueByVersion = (key: string, version: string, defaultValue: string) => {
    const version_key = `${key}_version`
    const correctVersion = localStorage.getItem(version_key) == version
    const localValue = localStorage.getItem(key) ?? defaultValue
    localStorage.setItem(version_key, version)
    if (correctVersion) {
        return JSON.parse(localValue)
    } else {
        return JSON.parse(defaultValue)
    }
}

export const getLocalFormation = () => {
    const defaultValue = JSON.stringify(fourThreeThree)
    return getLocalValueByVersion('formation', FORMATION_VERSION, defaultValue)
}

export const setLocalFormation = (formation: Formation) => {
    return localStorage.setItem('formation', JSON.stringify(formation))
}

export const getLocalStats = () => {
    const defaultValue = JSON.stringify({ stats: [] })
    return getLocalValueByVersion('stats', STATS_VERSION, defaultValue).stats as PlayerStats[]
}

export const setLocalStats = (stats: PlayerStats[]) => {
    return localStorage.setItem('stats', JSON.stringify({ stats: stats }))
}

export const getLocalTeam = () => {
    const defaultValue = JSON.stringify({
        goalkeeper: [],
        wingers: [],
        defenders: [],
        midfielders: [],
        strikers: [],
        manager: [],
    })
    return getLocalValueByVersion('team', TEAM_VERSION, defaultValue)
}

export const setLocalTeam = (team: Team) => {
    localStorage.setItem('team', JSON.stringify(team))
}
