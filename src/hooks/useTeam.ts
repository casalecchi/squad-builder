import { useEffect, useState } from 'react'
import { Player, PlayerWithStats, Team } from '../models'
import { getLocalTeam, getTeamAverage, getTeamValue, setLocalTeam, sleep } from '../utils'
import useGetPlayerData from './useGetPlayerData'

interface TeamState {
    team: Team
    teamValue: number
    teamAverage: number
    stats: PlayerWithStats[]
    addPlayer: (keyPosition: keyof Team, player: Player) => void
    removePlayer: (keyPosition: keyof Team, player: Player) => void
}

export const useTeam = (): TeamState => {
    const [team, setTeam] = useState<Team>(getLocalTeam())
    const [teamValue, setTeamValue] = useState<number>(getTeamValue(team))
    const [teamAverage, setTeamAverage] = useState<number>(getTeamAverage(team))
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
        setTeamAverage(getTeamAverage(team))
    }, [team])

    useEffect(() => {
        // On reload we update the stats from team
        const team: Team = getLocalTeam()
        Object.keys(team).forEach(async (positionKey) => {
            for (const player of team[positionKey as keyof Team]) {
                await sleep()
                getPlayerData(player, setStats)
            }
        })
    }, [])

    return { team, teamValue, teamAverage, stats, addPlayer, removePlayer }
}
