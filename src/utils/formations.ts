import { Formation } from '../models'
import {
    fiveDefenders,
    fiveMidfielders,
    fourDefenders,
    fourMidfielders,
    goalkeeperPosition,
    oneStriker,
    threeDefenders,
    threeMidfielders,
    threeStrikers,
    twoStrikers,
} from './positions'

export const threeFourThree: Formation = {
    id: '343',
    defendersQuantity: 3,
    playersPositions: [goalkeeperPosition, ...threeDefenders, ...fourMidfielders, ...threeStrikers],
}

export const threeFiveTwo: Formation = {
    id: '352',
    defendersQuantity: 3,
    playersPositions: [goalkeeperPosition, ...threeDefenders, ...fiveMidfielders, ...twoStrikers],
}

export const fourThreeThree: Formation = {
    id: '433',
    defendersQuantity: 4,
    playersPositions: [goalkeeperPosition, ...fourDefenders, ...threeMidfielders, ...threeStrikers],
}

export const fourFourTwo: Formation = {
    id: '442',
    defendersQuantity: 4,
    playersPositions: [goalkeeperPosition, ...fourDefenders, ...fourMidfielders, ...twoStrikers],
}
export const fourFiveOne: Formation = {
    id: '451',
    defendersQuantity: 4,
    playersPositions: [goalkeeperPosition, ...fourDefenders, ...fiveMidfielders, oneStriker],
}

export const fiveThreeTwo: Formation = {
    id: '532',
    defendersQuantity: 5,
    playersPositions: [goalkeeperPosition, ...fiveDefenders, ...threeMidfielders, ...twoStrikers],
}

export const fiveFourOne: Formation = {
    id: '541',
    defendersQuantity: 5,
    playersPositions: [goalkeeperPosition, ...fiveDefenders, ...fourMidfielders, oneStriker],
}

export const ALL_FORMATIONS = [
    threeFourThree,
    threeFiveTwo,
    fourThreeThree,
    fourFourTwo,
    fourFiveOne,
    fiveThreeTwo,
    fiveFourOne,
]

export const findFormation = (id: string) => ALL_FORMATIONS.find((formation) => formation.id == id)
