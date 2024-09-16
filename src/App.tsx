import { CssBaseline, ThemeProvider } from '@mui/material'
import Page from './components/page'
import theme from './configurations/theme'
import { DataProvider } from './contexts/DataContext'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme>
                <DataProvider>
                    <Page />
                </DataProvider>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
