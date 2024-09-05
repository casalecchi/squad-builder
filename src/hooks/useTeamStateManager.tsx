import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Player, Team } from '../models/player'
import { Formation } from '../models'
import { fourThreeThree } from '../utils/formations'
import useFetchCartola from './useFetchCartola'

export interface TeamStateManager {
    team: Team
    formation: Formation
    players: Player[]
    addPlayer: (keyPosition: keyof Team, index: number, player: Player) => void
    removePlayer: (keyPosition: keyof Team, index: number) => void
    setFormation: Dispatch<SetStateAction<Formation>>
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
    const { players, fetchData } = useFetchCartola()

    const removePlayer = (keyPosition: keyof Team, index: number) => {
        const newTeam = { ...team }
        newTeam[keyPosition][index] = {} as Player
        setTeam(newTeam)
    }

    const addPlayer = (keyPosition: keyof Team, index: number, player: Player) => {
        const newTeam = { ...team }
        newTeam[keyPosition][index] = player
        setTeam(newTeam)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { team, players, formation, addPlayer, removePlayer, setFormation }
}
