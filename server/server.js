import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/api/market', async (req, res) => {
    try {
        const URL = 'https://api.cartola.globo.com/atletas/mercado'
        const response = await axios.get(URL)
        res.json(response.data)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error on fetching /api/market' })
    }
})

const PORT = process.env.PORT || 3004
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
