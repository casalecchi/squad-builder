import { PlayerStatValue, PlayerStats, PlayerWithStats, StatMetric } from '../models'
import colors from '../styles/colors.module.scss'
import { formatNumber } from './formatters'

export const getPositiveColor = (value: number, max: number) => {
    if (value < max * 0.4) {
        return colors.bad
    } else if (value < max * 0.65) {
        return colors.regular
    } else if (value < max * 0.9) {
        return colors.good
    } else {
        return colors.perfect
    }
}

export const getNegativeColor = (value: number, max: number) => {
    if (value < max * 0.2) {
        return colors.perfect
    } else if (value < max * 0.4) {
        return colors.good
    } else if (value < max * 0.7) {
        return colors.regular
    } else {
        return colors.bad
    }
}

export const getAttributeFromStats = (
    stats: PlayerWithStats[],
    attrs: (keyof PlayerStats)[]
): PlayerStatValue[] => {
    if (attrs.length == 2) {
        return stats.map((ps) => ({
            player: ps.player,
            statValue: (ps.stats[attrs[0]] ?? 0) - (ps.stats[attrs[1]] ?? 0),
        }))
    }
    return stats.map((ps) => ({ player: ps.player, statValue: ps.stats[attrs[0]] ?? 0 }))
}

export const convertToMetric = (statValue: number, stats: PlayerStats, metric: StatMetric) => {
    let multiplier: number
    switch (metric) {
        case 'total':
            multiplier = 1
            break
        case 'mean':
            multiplier = 1
            break
        case '90min':
            multiplier = 1 / (stats.minutesPlayed / 90)
            break
        case 'game':
            multiplier = 1 / stats.appearances
            break
        default:
            multiplier = 0
    }
    return formatNumber(statValue * multiplier)
}

export const getConvertedPlayerStatValue = (
    playerStatValue: PlayerStatValue,
    playerStats: PlayerWithStats[],
    metric: StatMetric
) => {
    const playerWithStats = playerStats.filter((ps) => playerStatValue.player.id == ps.player.id)
    if (playerWithStats.length > 1) {
        console.error('Convert To Metric Error - duplicate id')
        return {} as PlayerStatValue
    }
    const playerWithStat = playerWithStats[0]
    const convertedPlayerStatValue = convertToMetric(
        playerStatValue.statValue,
        playerWithStat.stats,
        metric
    )
    return { player: playerStatValue.player, statValue: convertedPlayerStatValue }
}
