import {
    fiveDefenders,
    fiveMidfielders,
    fourDefenders,
    fourMidfielders,
    goalkeeperPosition,
    managerPosition,
    oneStriker,
    threeDefenders,
    threeMidfielders,
    threeStrikers,
    twoStrikers,
} from '.'
import { Formation } from '../models'

export const threeFourThree: Formation = {
    id: '343',
    goalkeeper: [goalkeeperPosition],
    wingers: [],
    defenders: threeDefenders,
    midfielders: fourMidfielders,
    strikers: threeStrikers,
    manager: [managerPosition]
}

export const threeFiveTwo: Formation = {
    id: '352',
    goalkeeper: [goalkeeperPosition],
    wingers: [],
    defenders: threeDefenders,
    midfielders: fiveMidfielders,
    strikers: twoStrikers,
    manager: [managerPosition]
}

export const fourThreeThree: Formation = {
    id: '433',
    goalkeeper: [goalkeeperPosition],
    wingers: fourDefenders.slice(0, 2),
    defenders: fourDefenders.slice(2),
    midfielders: threeMidfielders,
    strikers: threeStrikers,
    manager: [managerPosition]
}

export const fourFourTwo: Formation = {
    id: '442',
    goalkeeper: [goalkeeperPosition],
    wingers: fourDefenders.slice(0, 2),
    defenders: fourDefenders.slice(2),
    midfielders: fourMidfielders,
    strikers: twoStrikers,
    manager: [managerPosition]
}
export const fourFiveOne: Formation = {
    id: '451',
    goalkeeper: [goalkeeperPosition],
    wingers: fourDefenders.slice(0, 2),
    defenders: fourDefenders.slice(2),
    midfielders: fiveMidfielders,
    strikers: [oneStriker],
    manager: [managerPosition]
}

export const fiveThreeTwo: Formation = {
    id: '532',
    goalkeeper: [goalkeeperPosition],
    wingers: fiveDefenders.slice(0, 2),
    defenders: fiveDefenders.slice(2),
    midfielders: threeMidfielders,
    strikers: twoStrikers,
    manager: [managerPosition]
}

export const fiveFourOne: Formation = {
    id: '541',
    goalkeeper: [goalkeeperPosition],
    wingers: fiveDefenders.slice(0, 2),
    defenders: fiveDefenders.slice(2),
    midfielders: fourMidfielders,
    strikers: [oneStriker],
    manager: [managerPosition]
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
