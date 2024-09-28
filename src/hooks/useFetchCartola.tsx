import { useState } from 'react'
import { Player, Clubs, Matchup } from '../models'
import axios from 'axios'

const useFetchCartola = () => {
    const [players, setPlayers] = useState<Player[]>([])
    const [clubs, setClubs] = useState<Clubs>({})
    const [matchups, setMatchups] = useState<Matchup[]>([])

    const fetchData = async () => {
        try {
            const marketResponse = await axios.get<Player[]>('/api/market')
            const players = marketResponse.data
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

    return { clubs, players, matchups, fetchData }
}

export default useFetchCartola
