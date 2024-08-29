import { CssBaseline, ThemeProvider } from '@mui/material'
import Page from './components/page'
import theme from './configurations/theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme>
                <Page />
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
