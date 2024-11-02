import { useState } from 'react'
import {
    Adjustment,
    Clubs,
    Formation,
    MarketInfo,
    Matches,
    Player,
    PlayerWithStats,
    Team,
} from '../models'
import { getLocalFormation, setLocalFormation } from '../utils'
import { useMarketOptions } from './useMarketOptions'
import { useTeam } from './useTeam'

export interface TeamStateManager {
    team: Team
    teamValue: number
    teamAverage: number
    formation: Formation
    players: Player[]
    clubs: Clubs
    marketInfo?: MarketInfo
    matches: Matches
    adjustment: Adjustment
    stats: PlayerWithStats[]
    addPlayer: (keyPosition: keyof Team, player: Player) => void
    changeFormation: (newFormation: Formation) => void
    removePlayer: (keyPosition: keyof Team, player: Player) => void
    resetAdjustment: () => void
}

export const useTeamStateManager = (): TeamStateManager => {
    const { team, teamValue, teamAverage, stats, addPlayer, removePlayer } = useTeam()
    const { players, matches, marketInfo, clubs } = useMarketOptions()

    // Formation will be separated in future hook
    const [formation, setFormation] = useState<Formation>(getLocalFormation())
    const [adjustment, setAdjustment] = useState<Adjustment>({} as Adjustment)
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

    return {
        team,
        teamValue,
        teamAverage,
        clubs,
        players,
        matches,
        marketInfo,
        formation,
        adjustment,
        stats,
        addPlayer,
        changeFormation,
        removePlayer,
        resetAdjustment,
    }
}
