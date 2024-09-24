import { useEffect, useState } from 'react'
import { Adjustment, Clubs, Formation, Player, Team } from '../models'
import { fourThreeThree } from '../constants'
import useFetchCartola from './useFetchCartola'

export interface TeamStateManager {
    team: Team
    formation: Formation
    players: Player[]
    clubs: Clubs
    adjustment: Adjustment
    addPlayer: (keyPosition: keyof Team, player: Player) => void
    changeFormation: (newFormation: Formation) => void
    removePlayer: (keyPosition: keyof Team, player: Player) => void
    resetAdjustment: () => void
}

export const useTeamStateManager = (): TeamStateManager => {
    const [team, setTeam] = useState<Team>({
        goalkeeper: [],
        wingers: [],
        defenders: [],
        midfielders: [],
        strikers: [],
    })
    const [formation, setFormation] = useState<Formation>(fourThreeThree)
    const [adjustment, setAdjustment] = useState<Adjustment>({} as Adjustment)
    const { clubs, players, fetchData } = useFetchCartola()

    const addPlayer = (keyPosition: keyof Team, player: Player) => {
        const newTeam = { ...team }
        newTeam[keyPosition].push(player)
        setTeam(newTeam)
    }

    const removePlayer = (keyPosition: keyof Team, player: Player) => {
        const newTeam = { ...team }
        newTeam[keyPosition] = newTeam[keyPosition].filter((p) => p.id != player.id)
        setTeam(newTeam)
    }

    const changeFormation = (newFormation: Formation) => {
        Object.keys(team).forEach((positionKey) => {
            const formationLength = newFormation[`${positionKey}` as keyof Formation].length
            if (formationLength < team[positionKey as keyof Team].length) {
                setAdjustment({ needAdjust: true, newFormation: newFormation })
                return
            }
        })
        setFormation(newFormation)
    }

    const resetAdjustment = () => {
        setAdjustment({} as Adjustment)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        team,
        clubs,
        players,
        formation,
        adjustment,
        addPlayer,
        changeFormation,
        removePlayer,
        resetAdjustment,
    }
}
