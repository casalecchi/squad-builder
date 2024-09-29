import { Router } from 'express'
import {
    getCartolaMarket,
    getClubs,
    getMatches,
    getPlayerData,
} from '../controllers/dataController.js'

const apiRouter = Router()

apiRouter.get('/market', getCartolaMarket)
apiRouter.get('/club/:clubId/player/:playerName', getPlayerData)
apiRouter.get('/clubs', getClubs)
apiRouter.get('/matchups', getMatches)

export default apiRouter
