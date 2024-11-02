import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { prepareQueryString } from '../utils/string.js'

const readCacheFile = (fileName) => {
    try {
        // eslint-disable-next-line no-undef
        const cachePath = path.join(process.cwd(), 'cache', fileName)
        const data = fs.readFileSync(cachePath, 'utf8')
        return JSON.parse(data)
    } catch (err) {
        console.error('Erro ao ler o arquivo JSON:', err)
        return null
    }
}

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

export const fetchCartolaClubs = async (useCache = true) => {
    const cachePath = 'clubs.json'
    const URL = 'https://api.cartola.globo.com/clubes'
    return useCache ? readCacheFile(cachePath) : await fetchFromURL(URL)
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
        const fileName = 'sofascoreIds.json'
        const jsonData = readCacheFile(fileName)
        const key = `${playerName.replace(' ', '')}${teamName.replace(' ', '')}`
        // verify if its mapped
        if (jsonData[key]) {
            return jsonData[key]
        }

        // add new ID
        const newId = await queryPlayerId(playerName, teamName)
        if (newId == undefined) throw Error
        jsonData[key] = newId

        // save cache JSON
        // eslint-disable-next-line no-undef
        const filePath = path.join(process.cwd(), 'cache', fileName)
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 4), 'utf8')
        console.log('Novos IDs salvos.')
    } catch {
        console.error('Erro pegar ID do jogador', playerName)
    }
}

export const fetchPlayerStats = async (playerId) => {
    const URL = `https://www.sofascore.com/api/v1/player/${playerId}/unique-tournament/325/season/58766/statistics/overall`
    return await fetchFromURL(URL)
}
