import { createTheme } from '@mui/material'
import colors from '../styles/colors.module.scss'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        text: {
            primary: colors.secondary,
        },
    },
})

export default theme
