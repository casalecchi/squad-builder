import { useState } from 'react'
import { Player, Clubs, Matchup, MarketInfo } from '../models'
import axios from 'axios'

const useFetchCartola = () => {
    const [players, setPlayers] = useState<Player[]>([])
    const [clubs, setClubs] = useState<Clubs>({})
    const [matchups, setMatchups] = useState<Matchup[]>([])
    const [marketInfo, setMarketInfo] = useState<MarketInfo>()

    const fetchData = async () => {
        try {
            const marketResponse = await axios.get<{ players: Player[]; info: MarketInfo }>(
                '/api/market'
            )
            setMarketInfo(marketResponse.data.info)
            const players = marketResponse.data.players
            setPlayers(players.filter((player) => player.position != 'man'))

            const clubsResponse = await axios.get<Clubs>('/api/clubs')
            const clubs = clubsResponse.data
            setClubs(clubs)

            const matchupsResponse = await axios.get<Matchup[]>('/api/matchups')
            const matchups = matchupsResponse.data
            setMatchups(matchups)
        } catch (error) {
            console.error('Error fetching Cartola players', error)
        }
    }

    return { clubs, players, matchups, marketInfo, fetchData }
}

export default useFetchCartola
