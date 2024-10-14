import { PlayerStats, PlayerWithStats, StatMetric } from '../models'
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
