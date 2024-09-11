import { useEffect, useState } from 'react'
import { Clubs, Formation, Player, Team } from '../models'
import { fourThreeThree } from '../constants'
import useFetchCartola from './useFetchCartola'

export interface TeamStateManager {
    team: Team
    formation: Formation
    players: Player[]
    clubs: Clubs
    addPlayer: (keyPosition: keyof Team, player: Player) => void
    changeFormation: (newFormation: Formation) => void
    removePlayer: (keyPosition: keyof Team, player: Player) => void
}

export const useTeamStateManager = (): TeamStateManager => {
    const [team, setTeam] = useState<Team>({
        // tentar fazer algo com o Team em vez da formation
        // quando mudar a formação abrir um Dialog para vender X jogadores e "concluir" a mudança
        // vender == remover do array -> array vai ficar com número certo de jogadores para a posição
        // comprar == push no array da posição
        goalkeeper: [],
        wingers: [],
        defenders: [],
        midfielders: [],
        strikers: [],
    })
    const [formation, setFormation] = useState<Formation>(fourThreeThree)
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
        // TODO - REFACTOR THIS LOGIC
        setFormation(newFormation)
    }

    useEffect(() => {
        console.log(team.midfielders)
    }, [team])

    useEffect(() => {
        fetchData()
    }, [])

    return { team, clubs, players, formation, addPlayer, changeFormation, removePlayer }
}
