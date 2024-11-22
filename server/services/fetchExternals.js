import axios from 'axios'
import fs from 'fs'
import path from 'path'
import cacheClubs from '../cache/clubs.json' assert { type: 'json' }
import cacheIds from '../cache/sofascoreIds.json' assert { type: 'json' }
import { prepareQueryString } from '../utils/string.js'

const fetchFromURL = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.error(`Error on GET URL - ${url}`)
        console.error(`Status: ${error.response?.status}`)
        console.error(`Data: ${JSON.stringify(error.response?.data)}`)
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

export const fetchCartolaClubs = async (useCache = true) => {
    const URL = 'https://api.cartola.globo.com/clubes'
    try {
        return useCache ? cacheClubs : await fetchFromURL(URL)
    } catch {
        throw Error
    }
}

export const fetchCartolaMatchups = async () => {
    const URL = 'https://api.cartola.globo.com/partidas'
    return await fetchFromURL(URL)
}

export const fetchCartolaLastPoints = async () => {
    const URL = 'https://api.cartola.globo.com/atletas/pontuados'
    return await fetchFromURL(URL)
}

const queryPlayerId = async (playerName, teamName, index = -1) => {
    try {
        const name = index > -1 ? playerName.split(' ')[index] : playerName
        const nameString = prepareQueryString(name)
        const teamString = prepareQueryString(teamName)
        const searchString = prepareQueryString(`${nameString} ${teamString}`)

        // const URL = `https://www.google.com/${searchString}`
        const URL = `https://www.sofascore.com/api/v1/search/player-team-persons?q=${searchString}&page=0`
        const data = await fetchFromURL(URL)
        if (data.results.length == 0) {
            if (playerName.split(' ').length < 2) throw Error
            return queryPlayerId(playerName, teamName, index + 1)
        }
        return data.results[0].entity.id
    } catch {
        console.error(`Error on query: params ${playerName} ${teamName}`)
        return undefined
    }
}

export const getSofascoreId = async (playerName, teamName) => {
    try {
        const jsonData = cacheIds
        const key = `${playerName.replace(' ', '')}${teamName.replace(' ', '')}`
        // verify if its mapped
        if (jsonData[key]) {
            return jsonData[key]
        }

        // get new ID
        const newId = await queryPlayerId(playerName, teamName)
        if (newId == undefined) throw Error

        // only add to cache if its runing locally
        // eslint-disable-next-line no-undef
        const vercelRun = process.env.VERCEL === '1'
        if (vercelRun) {
            return newId
        }
        jsonData[key] = newId
        // save cache JSON
        const fileName = 'sofascoreIds.json'
        // eslint-disable-next-line no-undef
        const filePath = path.join(process.cwd(), 'cache', fileName)
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 4), 'utf8')
        console.log('Novos IDs salvos.')
        return newId
    } catch {
        console.error('Erro pegar ID do jogador', playerName)
    }
}

export const fetchPlayerStats = async (playerId) => {
    // const URL = `https://www.google.com/${playerId}`
    const URL = `https://www.sofascore.com/api/v1/player/${playerId}/unique-tournament/325/season/58766/statistics/overall`
    return await fetchFromURL(URL)
}
