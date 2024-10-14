import axios from 'axios'
import { Player, PlayerStats, PlayerWithStats } from '../models'
import { Dispatch, SetStateAction } from 'react'

const reloadStats = (
    prevStats: PlayerWithStats[],
    newPlayerStats: PlayerWithStats
): PlayerWithStats[] => {
    const index = prevStats.findIndex((ps) => ps.player.id == newPlayerStats.player.id)
    const newStats = [...prevStats]
    if (index > -1) {
        newStats[index] = newPlayerStats
    } else {
        newStats.push(newPlayerStats)
    }
    return newStats
}

const useGetPlayerData = () => {
    const fetchPlayerData = async (clubId: number, playerName: string) => {
        try {
            const response = await axios.get<PlayerStats>(
                `/api/club/${clubId}/player/${playerName}`
            )
            return response.data
        } catch {
            console.error(`Could not fetch data for: ${playerName}`)
        }
    }

    const getPlayerData = (
        player: Player,
        setStats: Dispatch<SetStateAction<PlayerWithStats[]>>
    ) => {
        fetchPlayerData(player.clubId, player.name).then((statistics) => {
            if (!statistics) return
            const playerStats = { player: player, stats: statistics } as PlayerWithStats
            setStats((prevStats) => reloadStats(prevStats, playerStats))
        })
    }

    return { fetchPlayerData, getPlayerData }
}

export default useGetPlayerData
