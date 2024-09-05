import { useState } from 'react'
import { CartolaResponse, Player } from '../models'

const useFetchCartola = () => {
    const URL = 'https://api.cartola.globo.com/atletas/mercado'
    const [players, setPlayers] = useState<Player[]>([])

    const fetchData = async () => {
        try {
            await fetch(URL)
                .then((response) => response.json())
                .then((data: CartolaResponse) => {
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
                })
                .catch((error) => console.error(error))
        } catch {
            console.log('Error fetching Cartola players')
        }
    }

    return { fetchData, players }
}

export default useFetchCartola
