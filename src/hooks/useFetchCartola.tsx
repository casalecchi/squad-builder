import { useState } from 'react'
import { CartolaResponse, Player, Club, CartolaPositionEnum } from '../models'
import axios from 'axios'

const useFetchCartola = () => {
    const URL = 'https://api.cartola.globo.com/atletas/mercado'
    const [players, setPlayers] = useState<Player[]>([])
    const [clubs, setClubs] = useState<Club[]>([])

    const fetchData = async () => {
        try {
            const response = await axios.get<CartolaResponse>(URL)
            const data = response.data

            setPlayers(
                data.atletas
                    .map((atleta) => ({
                        id: atleta.atleta_id,
                        clubId: atleta.clube_id,
                        positionId: atleta.posicao_id,
                        statusId: atleta.status_id,
                        name: atleta.apelido,
                        price: atleta.preco_num,
                        photo: atleta.foto?.replace('FORMATO', '220x220') ?? '',
                    }))
                    .filter((player) => player.positionId != CartolaPositionEnum.manager)
            )
            setClubs(
                Object.values(data.clubes).map((club) => ({
                    id: club.id,
                    name: club.nome,
                    abbreviation: club.abreviacao,
                    photo: club.escudos['60x60'],
                }))
            )
        } catch (error) {
            console.error('Error fetching Cartola players', error)
        }
    }

    return { clubs, players, fetchData }
}

export default useFetchCartola
