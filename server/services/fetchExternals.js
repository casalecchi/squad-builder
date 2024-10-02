import axios from 'axios'
import { prepareQueryString } from '../utils/string.js'

const fetchFromURL = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch {
        console.error(`Error on GET URL - ${url}`)
    }
}

export const fetchCartolaMarket = async () => {
    const URL = 'https://api.cartola.globo.com/atletas/mercado'
    return await fetchFromURL(URL)
}

export const fetchCartolaMarketInfo = async () => {
    const URL = 'https://api.cartola.globo.com/mercado/status'
    return await fetchFromURL(URL)
}

export const fetchCartolaClubs = async () => {
    const URL = 'https://api.cartola.globo.com/clubes'
    return await fetchFromURL(URL)
}

export const fetchCartolaMatchups = async () => {
    const URL = 'https://api.cartola.globo.com/partidas'
    return await fetchFromURL(URL)
}

export const fetchCartolaLastPoints = async () => {
    const URL = 'https://api.cartola.globo.com/atletas/pontuados'
    return await fetchFromURL(URL)
}

export const queryPlayerId = async (playerName, teamName, index = -1) => {
    const name = index > -1 ? playerName.split(' ')[index] : playerName
    const nameString = prepareQueryString(name)
    const teamString = prepareQueryString(teamName)
    const searchString = prepareQueryString(`${nameString} ${teamString}`)

    const URL = `https://www.sofascore.com/api/v1/search/player-team-persons?q=${searchString}&page=0`
    try {
        const data = await fetchFromURL(URL)
        if (data.results.length == 0) {
            if (playerName.split(' ').length < 2) throw Error
            return queryPlayerId(playerName, teamName, index + 1)
        }
        return data.results[0].entity.id
    } catch {
        console.error(`Error on query: params ${searchString}`)
    }
}

export const fetchPlayerStats = async (playerId) => {
    const URL = `https://www.sofascore.com/api/v1/player/${playerId}/unique-tournament/325/season/58766/statistics/overall`
    return await fetchFromURL(URL)
}
