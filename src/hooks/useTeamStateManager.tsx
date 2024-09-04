import { Dispatch, SetStateAction, useState } from 'react'
import { Player, Team } from '../models/player'
import { Formation } from '../models'
import { fourThreeThree } from '../utils/formations'

export interface TeamStateManager {
    team: Team
    formation: Formation
    addPlayer: (keyPosition: keyof Team, index: number) => void
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

    const removePlayer = (keyPosition: keyof Team, index: number) => {
        const newTeam = { ...team }
        newTeam[keyPosition][index] = {} as Player
        console.log(newTeam[keyPosition], index)
        setTeam(newTeam)
    }

    const addPlayer = (keyPosition: keyof Team, index: number) => {
        const newTeam = { ...team }
        newTeam[keyPosition][index] = { id: index, name: 'cano', positionCode: 'st' }
        console.log(newTeam[keyPosition], index)
        setTeam(newTeam)
    }

    return { team, formation, addPlayer, removePlayer, setFormation }
}
