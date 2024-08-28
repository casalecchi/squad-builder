import { createTheme, colors, CssBaseline, ThemeProvider } from '@mui/material'
import Field from './components/Field'

const theme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: colors.orange[500],
        },
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme>
                <Field />
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
