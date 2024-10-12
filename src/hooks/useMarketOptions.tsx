import { useEffect, useState } from 'react'
import { Clubs, MarketInfo, Matches, Player } from '../models'
import useFetchCartola from './useFetchCartola'
import { Match } from '../components/builder/market/marketItems'

interface MarketOptionsState {
    players: Player[]
    matches: Matches
    marketInfo?: MarketInfo
    clubs: Clubs
}

export const useMarketOptions = (): MarketOptionsState => {
    const [matches, setMatches] = useState<Matches>({})
    const [orderedPlayers, setOrderedPlayers] = useState<Player[]>([])
    const { clubs, players, matchups, marketInfo, fetchData } = useFetchCartola()

    useEffect(() => {
        const probablePlayers = players
            .filter((player) => player.status === 'probable')
            .sort((a, b) => b.price - a.price)
        const otherPlayers = players
            .filter((player) => player.status !== 'probable')
            .sort((a, b) => b.price - a.price)

        setOrderedPlayers([...probablePlayers, ...otherPlayers])
    }, [players])

    useEffect(() => {
        const newMatches: Matches = {}
        matchups?.forEach((matchup) => {
            const { homeClubId, awayClubId } = matchup
            const homePhoto = clubs[homeClubId]?.photo
            const awayPhoto = clubs[awayClubId]?.photo
            newMatches[homeClubId] = newMatches[awayClubId] = (
                <Match awayUrl={awayPhoto} homeUrl={homePhoto} />
            )
        })
        setMatches(newMatches)
    }, [clubs, matchups])

    useEffect(() => {
        fetchData()
    }, [])

    return { players: orderedPlayers, matches, marketInfo, clubs }
}
