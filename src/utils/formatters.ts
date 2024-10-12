export const formatPlayerName = (name: string | undefined) => {
    if (!name) return undefined
    const splittedName = name.split(' ')
    const needToShrink = name.length > 12 && splittedName.length > 1
    return needToShrink ? `${splittedName[0][0]}. ${splittedName[1]}` : name
}

export const formatNumber = (value?: number, decimalPlaces = 2) => {
    // TODO - refactor this
    return parseFloat(value?.toFixed(decimalPlaces) ?? '0')
}
