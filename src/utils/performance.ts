export const randomNumber = () => Math.random()

export const sleep = (ms: number = randomNumber()) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
