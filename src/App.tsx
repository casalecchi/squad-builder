import { CssBaseline, ThemeProvider } from '@mui/material'
import Page from './components/page'
import { darkTheme } from './configurations/theme'
import { DataProvider } from './contexts/DataContext'

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline enableColorScheme>
                <DataProvider>
                    <Page />
                </DataProvider>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
