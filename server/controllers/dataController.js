import {
    fetchCartolaClubs,
    fetchCartolaMarket,
    fetchCartolaMatchups,
    fetchPlayerStats,
    queryPlayerId,
} from '../services/fetchExternals.js'
import { positionIdMap, statusIdMap } from '../mappings/cartola.js'

export const getCartolaMarket = async (req, res) => {
    const data = await fetchCartolaMarket()
    const players = data.atletas.map((atleta) => ({
        id: atleta.atleta_id,
        clubId: atleta.clube_id,
        position: positionIdMap[atleta.posicao_id],
        status: statusIdMap[atleta.status_id],
        name: atleta.apelido,
        price: atleta.preco_num,
        photo: atleta.foto?.replace('FORMATO', '220x220') ?? '',
    }))
    if (!players) return res.status(404).json({ error: 'Cannot GET Cartola Market' })
    return res.json(players)
}

export const getClubs = async (req, res) => {
    const data = await fetchCartolaClubs()
    const clubs = {}
    Object.keys(data).forEach((clubId) => {
        const club = data[clubId]
        clubs[clubId] = {
            id: club.id,
            name: club.nome,
            abbreviation: club.abreviacao,
            photo: club.escudos['60x60'],
        }
    })
    if (!clubs) return res.status(404).json({ error: 'Cannot GET Cartola Clubs' })
    return res.json(clubs)
}

export const getMatches = async (req, res) => {
    const data = await fetchCartolaMatchups()
    const matchups = data.partidas.map((match) => ({
        homeClubId: match.clube_casa_id,
        awayClubId: match.clube_visitante_id,
    }))
    res.json(matchups)
}

export const getPlayerData = async (req, res) => {
    const teamMap = await fetchCartolaClubs()
    const { clubId: teamCartolaId, playerName } = req.params

    const team = teamMap[teamCartolaId]
    if (!team) return res.status(400).json({ error: 'Invalid team ID' })

    const playerId = await queryPlayerId(playerName, team.nome)
    if (!playerId) return res.status(404).json({ error: 'Player not found' })

    const data = await fetchPlayerStats(playerId)
    if (!data) return res.status(404).json({ error: 'Data for selected player not found' })

    return res.json(data.statistics)
}
