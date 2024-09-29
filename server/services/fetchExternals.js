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

export const fetchCartolaClubs = async () => {
    const URL = 'https://api.cartola.globo.com/clubes'
    return await fetchFromURL(URL)
}

export const fetchCartolaMatchups = async () => {
    const URL = 'https://api.cartola.globo.com/partidas'
    return await fetchFromURL(URL)
}

export const queryPlayerId = async (playerName, teamName) => {
    const name = prepareQueryString(playerName)
    const team = prepareQueryString(teamName)
    const searchString = prepareQueryString(`${name} ${team}`)

    const URL = `https://www.sofascore.com/api/v1/search/player-team-persons?q=${searchString}&page=0`
    try {
        const data = await fetchFromURL(URL)
        return data.results[0].entity.id
    } catch {
        console.error(`Error on query: params ${searchString}`)
    }
}

export const fetchPlayerStats = async (playerId) => {
    const URL = `https://www.sofascore.com/api/v1/player/${playerId}/unique-tournament/325/season/58766/statistics/overall`
    return await fetchFromURL(URL)
}
