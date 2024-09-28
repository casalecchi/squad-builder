import { fetchCartolaClubs, fetchPlayerStats, queryPlayerId } from '../services/index.js'

export const getPlayerData = async (req, res) => {
    const teamMap = await fetchCartolaClubs()
    const { id: teamCartolaId, playerName } = req.body

    const team = teamMap[teamCartolaId]
    if (!team) {
        return res.status(400).json({ error: 'Invalid team ID' })
    }

    const playerId = await queryPlayerId(playerName, team.nome)
    console.log(playerId)
    const data = await fetchPlayerStats(playerId)
    res.json(data)
}
