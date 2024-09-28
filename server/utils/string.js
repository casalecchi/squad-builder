export const prepareQueryString = (text) => {
    return text.split('-')[0].replace(' ', '%20')
}
