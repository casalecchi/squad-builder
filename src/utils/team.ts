import { Player, Team } from '../models'

export const getTeamValue = (team: Team) => {
    let value = 0
    Object.values(team).forEach((players: Player[]) => {
        value = players.reduce((acc, player) => acc + player.price, value)
    })
    return value
}

export const getTeamAverage = (team: Team) => {
    let value = 0
    Object.values(team).forEach((players: Player[]) => {
        value = players.reduce((acc, player) => acc + (player.average ?? 0), value)
    })
    return value
}
