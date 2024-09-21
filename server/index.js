import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/api/mercado', async (req, res) => {
    try {
        const response = await axios.get('https://api.cartola.globo.com/atletas/mercado')
        res.json(response.data)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Erro ao buscar dados da API do Cartola' })
    }
})

app.listen(3004, () => {
    console.log(`Servidor rodando na porta ${3004}`)
})
