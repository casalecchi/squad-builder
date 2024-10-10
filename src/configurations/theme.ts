import { createTheme } from '@mui/material'
import colors from '../styles/colors.module.scss'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: colors.primaryDark,
        },
        secondary: {
            main: colors.secondaryDark,
        },
        background: {
            default: colors.pureBlack,
            paper: colors.cardDarkBackground,
        },
    },
    typography: {
        fontFamily: 'Oswald, Roboto',
    },
})

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: colors.primaryLight,
        },
        secondary: {
            main: colors.secondaryLight,
        },
    },
    typography: {
        fontFamily: 'Oswald, Roboto',
    },
})
