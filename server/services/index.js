import axios from 'axios'
import { prepareQueryString } from '../utils/index.js'

const fetchFromURL = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch {
        console.error(`Error on GET URL - ${url}`)
    }
}

export const fetchCartolaMarket = async (req, res) => {
    try {
        const URL = 'https://api.cartola.globo.com/atletas/mercado'
        const response = await axios.get(URL)
        res.json(response.data)
    } catch {
        console.log('Error fetching Cartola Market')
        res.status(500).json({ message: 'Error on fetching /api/market' })
    }
}

export const fetchCartolaClubs = () => {
    const URL = 'https://api.cartola.globo.com/clubes'
    return fetchFromURL(URL)
}

export const queryPlayerId = async (playerName, teamName) => {
    const name = prepareQueryString(playerName)
    const team = prepareQueryString(teamName)
    const searchString = prepareQueryString(`${name} ${team}`)
    console.log(searchString)
    const URL = `https://www.sofascore.com/api/v1/search/player-team-persons?q=${searchString}&page=0`
    try {
        const response = await axios.get(URL)
        return response.data['results'][0]['entity']['id']
    } catch {
        console.log(`Error on query: params ${searchString}`)
    }
}

export const fetchPlayerStats = async (playerId) => {
    try {
        const URL = `https://www.sofascore.com/api/v1/player/${playerId}/unique-tournament/325/season/58766/statistics/overall`
        const response = await axios.get(URL)
        return response.data
    } catch {
        console.log(`Error fetching ${playerId} stats`)
    }
}
