import { PlayerStats, PlayerWithStats, StatMetric } from '../models'
import colors from '../styles/colors.module.scss'
import { formatNumber } from './formatters'

export const getPercentageColor = (value: number) => {
    if (value < 5) {
        return colors.bad
    } else if (value < 8) {
        return colors.regular
    } else if (value < 9.7) {
        return colors.good
    } else {
        return colors.perfect
    }
}

export const transformValueToMetric = (
    attribute: keyof PlayerStats,
    stats: PlayerStats,
    metric: StatMetric
) => {
    let multiplier: number
    switch (metric) {
        case 'total':
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
    const value = (stats[attribute] ?? 0) * multiplier
    return formatNumber(value)
}

export const getStatValue = (
    attribute: keyof PlayerStats,
    playerStats: PlayerWithStats[],
    metric: StatMetric
) => {
    const rawValues = playerStats.map((ps) => transformValueToMetric(attribute, ps.stats, metric))
    const total = rawValues.reduce((acc, currentValue) => acc + currentValue, 0)
    return formatNumber(total)
}
