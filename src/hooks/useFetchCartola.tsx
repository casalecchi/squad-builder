import { useState } from 'react'
import { CartolaResponse, Player, Clubs } from '../models'
import axios from 'axios'
import { positionIdMap } from '../constants'

const useFetchCartola = () => {
    const URL = 'https://api.cartola.globo.com/atletas/mercado'
    const [players, setPlayers] = useState<Player[]>([])
    const [clubs, setClubs] = useState<Clubs>({})

    const fetchData = async () => {
        try {
            const response = await axios.get<CartolaResponse>(URL)
            const data = response.data

            setPlayers(
                data.atletas
                    .map((atleta) => ({
                        id: atleta.atleta_id,
                        clubId: atleta.clube_id,
                        position: positionIdMap[atleta.posicao_id],
                        statusId: atleta.status_id,
                        name: atleta.apelido,
                        price: atleta.preco_num,
                        photo: atleta.foto?.replace('FORMATO', '220x220') ?? '',
                    }))
                    .filter((player) => player.position.name != 'manager')
            )

            const clubsToAdd = {} as Clubs
            Object.values(data.clubes).forEach((club) => {
                clubsToAdd[club.id] = {
                    id: club.id,
                    name: club.nome,
                    abbreviation: club.abreviacao,
                    photo: club.escudos['60x60'],
                }
            })
            setClubs(clubsToAdd)
        } catch (error) {
            console.error('Error fetching Cartola players', error)
        }
    }

    return { clubs, players, fetchData }
}

export default useFetchCartola
