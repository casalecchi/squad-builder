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
    goalkeeperPosition: goalkeeperPosition,
    defendersPositions: threeDefenders,
    midfieldersPositions: fourMidfielders,
    strikersPositions: threeStrikers,
}

export const threeFiveTwo: Formation = {
    id: '352',
    goalkeeperPosition: goalkeeperPosition,
    defendersPositions: threeDefenders,
    midfieldersPositions: fiveMidfielders,
    strikersPositions: twoStrikers,
}

export const fourThreeThree: Formation = {
    id: '433',
    goalkeeperPosition: goalkeeperPosition,
    defendersPositions: fourDefenders,
    midfieldersPositions: threeMidfielders,
    strikersPositions: threeStrikers,
}

export const fourFourTwo: Formation = {
    id: '442',
    goalkeeperPosition: goalkeeperPosition,
    defendersPositions: fourDefenders,
    midfieldersPositions: fourMidfielders,
    strikersPositions: twoStrikers,
}
export const fourFiveOne: Formation = {
    id: '451',
    goalkeeperPosition: goalkeeperPosition,
    defendersPositions: fourDefenders,
    midfieldersPositions: fiveMidfielders,
    strikersPositions: [oneStriker],
}

export const fiveThreeTwo: Formation = {
    id: '532',
    goalkeeperPosition: goalkeeperPosition,
    defendersPositions: fiveDefenders,
    midfieldersPositions: threeMidfielders,
    strikersPositions: twoStrikers,
}

export const fiveFourOne: Formation = {
    id: '541',
    goalkeeperPosition: goalkeeperPosition,
    defendersPositions: fiveDefenders,
    midfieldersPositions: fourMidfielders,
    strikersPositions: [oneStriker],
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
