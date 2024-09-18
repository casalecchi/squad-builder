import { useEffect, useState } from 'react'
import { Clubs, Formation, Player, Team } from '../models'
import { fourThreeThree } from '../constants'
import useFetchCartola from './useFetchCartola'

export interface TeamStateManager {
    team: Team
    formation: Formation
    players: Player[]
    clubs: Clubs
    openSellPlayers: boolean
    addPlayer: (keyPosition: keyof Team, player: Player) => void
    changeFormation: (newFormation: Formation) => void
    removePlayer: (keyPosition: keyof Team, player: Player) => void
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
    const [openSellPlayers, setOpenSellPlayers] = useState<boolean>(false)
    const { clubs, players, fetchData } = useFetchCartola()

    const addPlayer = (keyPosition: keyof Team, player: Player) => {
        const newTeam = { ...team }
        newTeam[keyPosition].push(player)
        setTeam(newTeam)
    }

    const removePlayer = (keyPosition: keyof Team, player: Player) => {
        const newTeam = { ...team }
        newTeam[keyPosition] = newTeam[keyPosition].filter((p) => p.id != player.id)
        console.log(newTeam[keyPosition])
        setTeam(newTeam)
    }

    const changeFormation = (newFormation: Formation) => {
        // TODO - OPEN DIALOG TO SELL PLAYERS
        Object.keys(team).forEach((positionKey) => {
            const formationLength = newFormation[`${positionKey}` as keyof Formation].length
            if (formationLength < team[positionKey as keyof Team].length) {
                setOpenSellPlayers(true)
            }
        })
        if (!openSellPlayers) setFormation(newFormation)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        team,
        clubs,
        players,
        formation,
        openSellPlayers,
        addPlayer,
        changeFormation,
        removePlayer,
    }
}
