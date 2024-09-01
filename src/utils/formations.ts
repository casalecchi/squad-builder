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

export const threeFourThree = [
    goalkeeperPosition,
    ...threeDefenders,
    ...fourMidfielders,
    ...threeStrikers,
]
export const threeFiveTwo = [
    goalkeeperPosition,
    ...threeDefenders,
    ...fiveMidfielders,
    ...twoStrikers,
]

export const fourThreeThree = [
    goalkeeperPosition,
    ...fourDefenders,
    ...threeMidfielders,
    ...threeStrikers,
]
export const fourFourTwo = [
    goalkeeperPosition,
    ...fourDefenders,
    ...fourMidfielders,
    ...twoStrikers,
]
export const fourFiveOne = [goalkeeperPosition, ...fourDefenders, ...fiveMidfielders, oneStriker]

export const fiveThreeTwo = [
    goalkeeperPosition,
    ...fiveDefenders,
    ...threeMidfielders,
    ...twoStrikers,
]
export const fiveFourOne = [goalkeeperPosition, ...fiveDefenders, ...fourMidfielders, oneStriker]
