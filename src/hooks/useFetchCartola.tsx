import { useState } from 'react'
import { CartolaResponse, Player } from '../models'
import axios from 'axios'

const useFetchCartola = () => {
    const URL = 'https://api.cartola.globo.com/atletas/mercado'
    const [players, setPlayers] = useState<Player[]>([])

    const fetchData = async () => {
        try {
            const response = await axios.get<CartolaResponse>(URL)
            const data = response.data

            setPlayers(
                data.atletas.map((atleta) => ({
                    id: atleta.atleta_id,
                    teamId: atleta.clube_id,
                    positionId: atleta.posicao_id,
                    statusId: atleta.status_id,
                    name: atleta.apelido,
                    price: atleta.preco_num,
                    photo: atleta.foto?.replace('FORMATO', '220x220') ?? '',
                }))
            )
        } catch (error) {
            console.error('Error fetching Cartola players', error)
        }
    }

    return { fetchData, players }
}

export default useFetchCartola
