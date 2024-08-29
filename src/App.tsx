import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from './components/header'
import theme from './configurations/theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme>
                <Header />
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
