import { PlayerStats } from '../models'
import colors from '../styles/colors.module.scss'
import { formatNumber } from './formatters'

export const getPercentageColor = (value: number) => {
    if (value < 50) {
        return colors.bad
    } else if (value < 80) {
        return colors.regular
    } else if (value < 97) {
        return colors.good
    } else {
        return colors.perfect
    }
}

export const getAbsoluteStat = (attribute: keyof PlayerStats, stats: PlayerStats[]) => {
    const rawValues = stats.map((stat) => stat[attribute] ?? 0)
    const total = rawValues.reduce((acc, currentValue) => acc + currentValue, 0)
    return formatNumber(total)
}
