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

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3004

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
