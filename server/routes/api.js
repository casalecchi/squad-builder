import { Router } from 'express'
import { fetchCartolaMarket } from '../services/index.js'
import { getPlayerData } from '../controllers/playerController.js'

const apiRouter = Router()

apiRouter.get('/market', fetchCartolaMarket)
apiRouter.post('/player', getPlayerData)

export default apiRouter
