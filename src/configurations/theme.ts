import { colors, createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: colors.purple[900],
        },
        secondary: {
            main: colors.orange[500],
        },
    },
})

export default theme
