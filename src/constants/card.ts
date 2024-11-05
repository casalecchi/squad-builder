import { CardDetail, CardTabColumn, CardTabEnum } from '../models'

export const statsCards: CardDetail[] = [
    {
        title: 'goals',
        attributes: ['goals'],
        unit: 'goals',
        interval: { max: 3 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.positive,
    },
    {
        title: 'assists',
        attributes: ['assists'],
        unit: 'assists',
        interval: { max: 3 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.positive,
    },
    {
        title: 'savedShots',
        attributes: ['shotsOnTarget', 'goals'], // calculo
        unit: 'shots',
        interval: { max: 5 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.positive,
    },
    {
        title: 'shotsOffTarget',
        attributes: ['shotsOffTarget'],
        unit: 'shots',
        interval: { max: 10 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.positive,
    },
    {
        title: 'sufferedFouls',
        attributes: ['wasFouled'],
        unit: 'fouls',
        interval: { max: 15 },
        positionsNotAllowed: [],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.positive,
    },
    {
        title: 'sufferedPenalties',
        attributes: ['penaltyWon'],
        unit: 'penalties',
        interval: { max: 0.5 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.positive,
    },
    // ------------- Defense -------------
    {
        title: 'savedPenalties',
        attributes: ['penaltySave'],
        unit: 'penalties',
        interval: { max: 0.5 },
        positionsNotAllowed: ['st', 'mid', 'wb', 'cb'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.positive,
    },
    {
        title: 'cleanSheets',
        attributes: ['cleanSheet'],
        unit: 'cleanSheet',
        interval: { max: 5 },
        positionsNotAllowed: ['st', 'mid'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.positive,
    },
    {
        title: 'saves',
        attributes: ['saves'],
        unit: 'saves',
        interval: { max: 8 },
        positionsNotAllowed: ['st', 'mid', 'wb', 'cb'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.positive,
    },
    {
        title: 'tackleWon',
        attributes: ['tacklesWon'],
        unit: 'tackleWon',
        interval: { max: 12 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.positive,
    },
    // -----------------------------------
    {
        title: 'penaltyLost',
        attributes: ['penaltiesTaken', 'penaltyGoals'],
        unit: 'penalties',
        interval: { max: 0.1 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.negative,
    },
    {
        title: 'offsides',
        attributes: ['offsides'],
        unit: 'offsides',
        interval: { max: 6 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.negative,
    },
    {
        title: 'ownGoals',
        attributes: ['ownGoals'],
        unit: 'goals',
        interval: { max: 0.2 },
        positionsNotAllowed: [],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.negative,
    },
    {
        title: 'redCard',
        attributes: ['redCards'],
        unit: 'cards',
        interval: { max: 1 },
        positionsNotAllowed: [],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.negative,
    },
    {
        title: 'yellowCards',
        attributes: ['yellowCards'],
        unit: 'cards',
        interval: { max: 3 },
        positionsNotAllowed: [],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.negative,
    },
    {
        title: 'goalsConceded',
        attributes: ['goalsConceded'],
        unit: 'goals',
        interval: { max: 1.5 },
        positionsNotAllowed: ['st', 'mid', 'wb', 'cb'],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.negative,
    },
    {
        title: 'fouls',
        attributes: ['fouls'],
        unit: 'fouls',
        interval: { max: 8 },
        positionsNotAllowed: [],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.negative,
    },
    {
        title: 'penaltiesConceded',
        attributes: ['penaltyConceded'],
        unit: 'penalties',
        interval: { max: 0.2 },
        positionsNotAllowed: [],
        tab: CardTabEnum.cartola,
        column: CardTabColumn.negative,
    },
    // ------------------- Others -----------------------
    {
        title: 'expectedGoals',
        attributes: ['expectedGoals'],
        unit: 'expectedGoals',
        interval: { max: 2 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.others,
        column: CardTabColumn.first,
    },
    {
        title: 'expectedAssists',
        attributes: ['expectedAssists'],
        unit: 'expectedAssists',
        interval: { max: 1 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.others,
        column: CardTabColumn.first,
    },
    {
        title: 'bigChancesCreated',
        attributes: ['bigChancesCreated'],
        unit: 'chances',
        interval: { max: 2 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.others,
        column: CardTabColumn.second,
    },
    {
        title: 'accuratePasses',
        attributes: ['accuratePasses'],
        unit: 'passes',
        interval: { max: 280 },
        positionsNotAllowed: [],
        tab: CardTabEnum.others,
        column: CardTabColumn.second,
    },
    {
        title: 'keyPasses',
        attributes: ['keyPasses'],
        unit: 'passes',
        interval: { max: 10 },
        positionsNotAllowed: [],
        tab: CardTabEnum.others,
        column: CardTabColumn.second,
    },
    {
        title: 'successfulDribbles',
        attributes: ['successfulDribbles'],
        unit: 'dribbles',
        interval: { max: 10 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.others,
        column: CardTabColumn.first,
    },
    {
        title: 'interceptions',
        attributes: ['interceptions'],
        unit: 'interceptions',
        interval: { max: 6 },
        positionsNotAllowed: ['gk'],
        tab: CardTabEnum.others,
        column: CardTabColumn.second,
    },
    {
        title: 'accurateCrosses',
        attributes: ['accurateCrosses'],
        unit: 'crosses',
        interval: { max: 6 },
        positionsNotAllowed: [],
        tab: CardTabEnum.others,
        column: CardTabColumn.second,
    },
    // --------------- Percentage ------------------
    {
        title: 'accuratePassesPercentage',
        attributes: ['accuratePassesPercentage'],
        unit: 'passes',
        interval: { max: 100 },
        positionsNotAllowed: [],
        tab: CardTabEnum.percentage,
        column: CardTabColumn.first,
    },
]
