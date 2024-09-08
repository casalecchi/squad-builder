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
} from '.'

export const threeFourThree: Formation = {
    id: '343',
    goalkeeperPositions: [goalkeeperPosition],
    wingersPositions: [],
    defendersPositions: threeDefenders,
    midfieldersPositions: fourMidfielders,
    strikersPositions: threeStrikers,
}

export const threeFiveTwo: Formation = {
    id: '352',
    goalkeeperPositions: [goalkeeperPosition],
    wingersPositions: [],
    defendersPositions: threeDefenders,
    midfieldersPositions: fiveMidfielders,
    strikersPositions: twoStrikers,
}

export const fourThreeThree: Formation = {
    id: '433',
    goalkeeperPositions: [goalkeeperPosition],
    wingersPositions: fourDefenders.slice(0, 2),
    defendersPositions: fourDefenders.slice(2),
    midfieldersPositions: threeMidfielders,
    strikersPositions: threeStrikers,
}

export const fourFourTwo: Formation = {
    id: '442',
    goalkeeperPositions: [goalkeeperPosition],
    wingersPositions: fourDefenders.slice(0, 2),
    defendersPositions: fourDefenders.slice(2),
    midfieldersPositions: fourMidfielders,
    strikersPositions: twoStrikers,
}
export const fourFiveOne: Formation = {
    id: '451',
    goalkeeperPositions: [goalkeeperPosition],
    wingersPositions: fourDefenders.slice(0, 2),
    defendersPositions: fourDefenders.slice(2),
    midfieldersPositions: fiveMidfielders,
    strikersPositions: [oneStriker],
}

export const fiveThreeTwo: Formation = {
    id: '532',
    goalkeeperPositions: [goalkeeperPosition],
    wingersPositions: fiveDefenders.slice(0, 2),
    defendersPositions: fiveDefenders.slice(2),
    midfieldersPositions: threeMidfielders,
    strikersPositions: twoStrikers,
}

export const fiveFourOne: Formation = {
    id: '541',
    goalkeeperPositions: [goalkeeperPosition],
    wingersPositions: fiveDefenders.slice(0, 2),
    defendersPositions: fiveDefenders.slice(2),
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
