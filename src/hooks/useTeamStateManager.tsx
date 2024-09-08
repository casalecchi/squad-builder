import { useEffect, useState } from 'react'
import { Clubs, Formation, Player, Team } from '../models'
import { fourThreeThree } from '../constants'
import useFetchCartola from './useFetchCartola'

export interface TeamStateManager {
    team: Team
    formation: Formation
    players: Player[]
    clubs: Clubs
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
        // TODO - REFACTOR THIS LOGIC
        const newTeam = { ...team }
        if (formation.wingersPositions.length > newFormation.wingersPositions.length) {
            newTeam.wingers = [{}, {}] as Player[]
        }
        if (formation.defendersPositions.length > newFormation.defendersPositions.length) {
            newTeam.defenders[2] = {} as Player
        }
        const prevMidLength = formation.midfieldersPositions.length
        const newMidLength = newFormation.midfieldersPositions.length
        if (prevMidLength > newMidLength) {
            const diff = prevMidLength - newMidLength
            for (let index = prevMidLength - diff; index < prevMidLength; index++) {
                newTeam.midfielders[index] = {} as Player
            }
        }
        const prevStLength = formation.strikersPositions.length
        const newStLength = newFormation.strikersPositions.length
        if (prevStLength > newStLength) {
            const diff = prevStLength - newStLength
            for (let index = prevStLength - diff; index < prevStLength; index++) {
                newTeam.midfielders[index] = {} as Player
            }
        }
        setFormation(newFormation)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { team, clubs, players, formation, addPlayer, changeFormation, removePlayer }
}
