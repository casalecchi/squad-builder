import { useEffect, useState } from 'react'
import {
    Adjustment,
    Clubs,
    Formation,
    MarketInfo,
    Matches,
    Player,
    PlayerStats,
    Team,
} from '../models'
import useFetchCartola from './useFetchCartola'
import { Match } from '../components/builder/market/marketItems'
import useGetPlayerData from './useGetPlayerData'
import {
    getLocalFormation,
    getLocalStats,
    getLocalTeam,
    getTeamValue,
    setLocalFormation,
    setLocalStats,
    setLocalTeam,
} from '../utils'

export interface TeamStateManager {
    team: Team
    teamValue: number
    formation: Formation
    players: Player[]
    clubs: Clubs
    marketInfo?: MarketInfo
    matches: Matches
    adjustment: Adjustment
    addPlayer: (keyPosition: keyof Team, player: Player) => void
    changeFormation: (newFormation: Formation) => void
    removePlayer: (keyPosition: keyof Team, player: Player) => void
    resetAdjustment: () => void
}

export const useTeamStateManager = (): TeamStateManager => {
    const [team, setTeam] = useState<Team>(getLocalTeam())
    const [teamValue, setTeamValue] = useState<number>(getTeamValue(team))
    const [formation, setFormation] = useState<Formation>(getLocalFormation())
    const [stats, setStats] = useState<PlayerStats[]>(getLocalStats())
    const [adjustment, setAdjustment] = useState<Adjustment>({} as Adjustment)
    const [matches, setMatches] = useState<Matches>({})
    const [orderedPlayers, setOrderedPlayers] = useState<Player[]>([])
    const { clubs, players, matchups, marketInfo, fetchData } = useFetchCartola()
    const { fetchPlayerData } = useGetPlayerData()

    const addPlayer = (keyPosition: keyof Team, player: Player) => {
        const newTeam = { ...team }
        newTeam[keyPosition].push(player)
        fetchPlayerData(player.clubId, player.name).then((statistics) => {
            if (!statistics) return
            const playerStats = { ...statistics, cartolaId: player.id } as PlayerStats
            const newStats = [...stats, playerStats]
            setStats(newStats)
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

    const changeFormation = (newFormation: Formation) => {
        // TO DO - ADJUSTMENTS
        Object.keys(team).forEach((positionKey) => {
            const formationLength = newFormation[`${positionKey}` as keyof Formation].length
            if (formationLength < team[positionKey as keyof Team].length) {
                setAdjustment({ needAdjust: true, newFormation: newFormation })
                return
            }
        })
        setLocalFormation(newFormation)
        setFormation(newFormation)
    }

    const resetAdjustment = () => {
        setAdjustment({} as Adjustment)
    }

    useEffect(() => {
        setLocalTeam(team)
        setTeamValue(getTeamValue(team))
    }, [team])

    useEffect(() => {
        setLocalStats(stats)
    }, [stats])

    useEffect(() => {
        const probable = players
            .filter((player) => player.status == 'probable')
            .sort((a, b) => b.price - a.price)
        const others = players
            .filter((player) => player.status != 'probable')
            .sort((a, b) => b.price - a.price)
        setOrderedPlayers([...probable, ...others])
    }, [players])

    useEffect(() => {
        const newMatches = {} as Matches
        matchups?.forEach((matchup) => {
            const homeId = matchup.homeClubId
            const awayId = matchup.awayClubId
            const homePhoto = clubs[homeId]?.photo
            const awayPhoto = clubs[awayId]?.photo
            const element = <Match awayUrl={awayPhoto} homeUrl={homePhoto} />
            newMatches[homeId] = newMatches[awayId] = element
        })
        setMatches(newMatches)
    }, [clubs, matchups])

    useEffect(() => {
        fetchData()
    }, [])

    return {
        team,
        teamValue,
        clubs,
        players: orderedPlayers,
        matches,
        marketInfo,
        formation,
        adjustment,
        addPlayer,
        changeFormation,
        removePlayer,
        resetAdjustment,
    }
}
