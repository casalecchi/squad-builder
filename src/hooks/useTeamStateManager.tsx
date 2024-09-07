import { useEffect, useState } from 'react'
import { Player, Team } from '../models/player'
import { Club, Formation } from '../models'
import { fourThreeThree } from '../utils/formations'
import useFetchCartola from './useFetchCartola'

export interface TeamStateManager {
    team: Team
    formation: Formation
    players: Player[]
    clubs: Club[]
    addPlayer: (keyPosition: keyof Team, index: number, player: Player) => void
    changeFormation: (newFormation: Formation) => void
    removePlayer: (keyPosition: keyof Team, index: number) => void
}

export const useTeamStateManager = (): TeamStateManager => {
    const [team, setTeam] = useState<Team>({
        goalkeeper: [{}] as Player[],
        wingers: [{}, {}] as Player[],
        defenders: [{}, {}, {}] as Player[],
        midfielders: [{}, {}, {}, {}, {}] as Player[],
        strikers: [{}, {}, {}] as Player[],
    })
    const [formation, setFormation] = useState<Formation>(fourThreeThree)
    const { clubs, players, fetchData } = useFetchCartola()

    const addPlayer = (keyPosition: keyof Team, index: number, player: Player) => {
        const newTeam = { ...team }
        newTeam[keyPosition][index] = player
        setTeam(newTeam)
    }

    const removePlayer = (keyPosition: keyof Team, index: number) => {
        const newTeam = { ...team }
        newTeam[keyPosition][index] = {} as Player
        setTeam(newTeam)
    }

    const changeFormation = (newFormation: Formation) => {
        setFormation(newFormation)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { team, clubs, players, formation, addPlayer, changeFormation, removePlayer }
}
