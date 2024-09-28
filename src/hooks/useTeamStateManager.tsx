import { useEffect, useState } from 'react'
import { Adjustment, Clubs, Formation, Matches, Player, Team } from '../models'
import { fourThreeThree } from '../constants'
import useFetchCartola from './useFetchCartola'
import { Avatar, Stack, Typography } from '@mui/material'

export interface TeamStateManager {
    team: Team
    formation: Formation
    players: Player[]
    clubs: Clubs
    matches: Matches
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
    const [matches, setMatches] = useState<Matches>({})
    const { clubs, players, matchups, fetchData } = useFetchCartola()

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
        // TO DO - refactor this, try to move this code to another place or create function
        const newMatches = {} as Matches
        matchups.forEach((matchup) => {
            const homeId = matchup.homeClubId
            const awayId = matchup.awayClubId
            const element = (
                <Stack alignItems={'center'} direction={'row'} spacing={1}>
                    <Avatar src={clubs[homeId].photo} variant={'square'} />
                    <Typography>{'X'}</Typography>
                    <Avatar src={clubs[awayId].photo} variant={'square'} />
                </Stack>
            )
            newMatches[homeId] = newMatches[awayId] = element
        })
        setMatches(newMatches)
    }, [clubs, matchups])

    useEffect(() => {
        fetchData()
    }, [])

    return {
        team,
        clubs,
        players,
        matches,
        formation,
        adjustment,
        addPlayer,
        changeFormation,
        removePlayer,
        resetAdjustment,
    }
}
