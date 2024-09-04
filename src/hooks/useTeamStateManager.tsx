import { Dispatch, SetStateAction, useState } from 'react'
import { Player, Team } from '../models/player'
import { Formation } from '../models'
import { fourThreeThree } from '../utils/formations'

export interface TeamStateManager {
    team: Team
    formation: Formation
    removePlayer: (keyPosition: keyof Team, index: number) => void
    setFormation: Dispatch<SetStateAction<Formation>>
}

export const useTeamStateManager = (): TeamStateManager => {
    const [team, setTeam] = useState<Team>({
        goalkeeper: [{ id: 1, name: 'cano', positionCode: 'st' }],
        wingers: [],
        defenders: [],
        midfielders: [],
        strikers: [],
    })
    const [formation, setFormation] = useState<Formation>(fourThreeThree)

    const removePlayer = (keyPosition: keyof Team, index: number) => {
        const newTeam = { ...team }
        newTeam[keyPosition][index] = {} as Player
        console.log(newTeam)
        setTeam(newTeam)
    }

    return { team, formation, removePlayer, setFormation }
}
