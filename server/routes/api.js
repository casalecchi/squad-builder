import { Router } from 'express'
import {
    getCartolaMarket,
    getClubs,
    getLastPoints,
    getMatches,
    getPlayerData,
} from '../controllers/dataController.js'

const apiRouter = Router()

apiRouter.get('/market', getCartolaMarket)
apiRouter.get('/club/:clubId/player/:playerName', getPlayerData)
apiRouter.get('/clubs', getClubs)
apiRouter.get('/matchups', getMatches)
apiRouter.get('/points', getLastPoints)

export default apiRouter
