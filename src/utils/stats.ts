import colors from '../styles/colors.module.scss'

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
