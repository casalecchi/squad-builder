import axios from 'axios'
import { PlayerStats } from '../models'

const useGetPlayerData = () => {
    const fetchPlayerData = async (clubId: number, playerName: string) => {
        try {
            const response = await axios.get<PlayerStats>(
                `/api/club/${clubId}/player/${playerName}`
            )
            return response.data
        } catch {
            console.error(`Could not fetch data for: ${playerName}`)
        }
    }

    return { fetchPlayerData }
}

export default useGetPlayerData
