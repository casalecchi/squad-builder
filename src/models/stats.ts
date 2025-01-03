import { Player } from './player'

export interface PlayerStats {
    cartolaId: number
    rating: number
    totalRating: number
    countRating: number
    goals: number
    bigChancesCreated: number
    bigChancesMissed: number
    assists: number
    expectedAssists: number
    goalsAssistsSum: number
    accuratePasses: number
    inaccuratePasses: number
    totalPasses: number
    accuratePassesPercentage: number
    accurateOwnHalfPasses: number
    accurateOppositionHalfPasses: number
    accurateFinalThirdPasses: number
    keyPasses: number
    successfulDribbles: number
    successfulDribblesPercentage: number
    tackles: number
    interceptions: number
    yellowCards: number
    directRedCards: number
    redCards: number
    accurateCrosses: number
    accurateCrossesPercentage: number
    totalShots: number
    shotsOnTarget: number
    shotsOffTarget: number
    groundDuelsWon: number
    groundDuelsWonPercentage: number
    aerialDuelsWon: number
    aerialDuelsWonPercentage: number
    totalDuelsWon: number
    totalDuelsWonPercentage: number
    minutesPlayed: number
    goalConversionPercentage: number
    penaltiesTaken: number
    penaltyGoals: number
    penaltyWon: number
    penaltyConceded: number
    shotFromSetPiece: number
    freeKickGoal: number
    goalsFromInsideTheBox: number
    goalsFromOutsideTheBox: number
    shotsFromInsideTheBox: number
    shotsFromOutsideTheBox: number
    headedGoals: number
    leftFootGoals: number
    rightFootGoals: number
    accurateLongBalls: number
    accurateLongBallsPercentage: number
    clearances: number
    errorLeadToGoal: number
    errorLeadToShot: number
    dispossessed: number
    possessionLost: number
    possessionWonAttThird: number
    totalChippedPasses: number
    accurateChippedPasses: number
    touches: number
    wasFouled: number
    fouls: number
    hitWoodwork: number
    ownGoals: number
    dribbledPast: number
    offsides: number
    blockedShots: number
    passToAssist: number
    saves: number
    cleanSheet: number
    penaltyFaced: number
    penaltySave: number
    savedShotsFromInsideTheBox: number
    savedShotsFromOutsideTheBox: number
    goalsConcededInsideTheBox: number
    goalsConcededOutsideTheBox: number
    punches: number
    runsOut: number
    successfulRunsOut: number
    highClaims: number
    crossesNotClaimed: number
    matchesStarted: number
    penaltyConversion: number
    setPieceConversion: number
    totalAttemptAssist: number
    totalContest: number
    totalCross: number
    duelLost: number
    aerialLost: number
    attemptPenaltyMiss: number
    attemptPenaltyPost: number
    attemptPenaltyTarget: number
    totalLongBalls: number
    goalsConceded: number
    tacklesWon: number
    tacklesWonPercentage: number
    scoringFrequency: number
    yellowRedCards: number
    savesCaught: number
    savesParried: number
    totalOwnHalfPasses: number
    totalOppositionHalfPasses: number
    totwAppearances: number
    expectedGoals: number
    goalKicks: number
    ballRecovery: number
    id: number
    appearances: number
}

export interface PlayerStatValue {
    player: Player
    statValue: number
}

export type StatMetric = 'total' | '90min' | 'game' | 'mean'

export interface PlayerWithStats {
    player: Player
    stats: PlayerStats
}
