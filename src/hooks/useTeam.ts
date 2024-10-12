import { useEffect, useState } from 'react'
import { Player, PlayerStats, Team } from '../models'
import { getLocalTeam, getLocalStats, getTeamValue, setLocalTeam, setLocalStats } from '../utils'
import useGetPlayerData from './useGetPlayerData'

interface TeamState {
    team: Team
    teamValue: number
    stats: PlayerStats[]
    addPlayer: (keyPosition: keyof Team, player: Player) => void
    removePlayer: (keyPosition: keyof Team, player: Player) => void
}

export const useTeam = (): TeamState => {
    const [team, setTeam] = useState<Team>(getLocalTeam())
    const [teamValue, setTeamValue] = useState<number>(getTeamValue(team))
    const [stats, setStats] = useState<PlayerStats[]>(getLocalStats())
    const { fetchPlayerData } = useGetPlayerData()

    const addPlayer = (keyPosition: keyof Team, player: Player) => {
        const newTeam = { ...team }
        newTeam[keyPosition].push(player)
        fetchPlayerData(player.clubId, player.name).then((statistics) => {
            if (!statistics) return
            const playerStats = { ...statistics, cartolaId: player.id } as PlayerStats
            setStats((prevStats) => [...prevStats, playerStats])
        })
        setTeam(newTeam)
    }

    const removePlayer = (keyPosition: keyof Team, player: Player) => {
        const newTeam = { ...team }
        newTeam[keyPosition] = newTeam[keyPosition].filter((p) => p.id != player.id)
        const filteredStats = stats.filter((stat) => player.id != stat.cartolaId)
        setStats(filteredStats)
        setTeam(newTeam)
    }

    useEffect(() => {
        setLocalTeam(team)
        setTeamValue(getTeamValue(team))
    }, [team])

    useEffect(() => {
        setLocalStats(stats)
    }, [stats])

    return { team, teamValue, stats, addPlayer, removePlayer }
}
