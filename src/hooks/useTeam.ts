import { useEffect, useState } from 'react'
import { Player, PlayerWithStats, Team } from '../models'
import { getLocalTeam, getTeamValue, setLocalTeam } from '../utils'
import useGetPlayerData from './useGetPlayerData'

interface TeamState {
    team: Team
    teamValue: number
    stats: PlayerWithStats[]
    addPlayer: (keyPosition: keyof Team, player: Player) => void
    removePlayer: (keyPosition: keyof Team, player: Player) => void
}

export const useTeam = (): TeamState => {
    const [team, setTeam] = useState<Team>(getLocalTeam())
    const [teamValue, setTeamValue] = useState<number>(getTeamValue(team))
    const [stats, setStats] = useState<PlayerWithStats[]>([])
    const { getPlayerData } = useGetPlayerData()

    const addPlayer = (keyPosition: keyof Team, player: Player) => {
        const newTeam = { ...team }
        newTeam[keyPosition].push(player)
        getPlayerData(player, setStats)
        setTeam(newTeam)
    }

    const removePlayer = (keyPosition: keyof Team, player: Player) => {
        const newTeam = { ...team }
        newTeam[keyPosition] = newTeam[keyPosition].filter((p) => p.id != player.id)
        const filteredStats = stats.filter((stat) => player.id != stat.player.id)
        setStats(filteredStats)
        setTeam(newTeam)
    }

    useEffect(() => {
        setLocalTeam(team)
        setTeamValue(getTeamValue(team))
    }, [team])

    useEffect(() => {
        // On reload we update the stats from team
        const team: Team = getLocalTeam()
        Object.keys(team).forEach((positionKey) => {
            for (const player of team[positionKey as keyof Team]) {
                getPlayerData(player, setStats)
            }
        })
    }, [])

    return { team, teamValue, stats, addPlayer, removePlayer }
}
