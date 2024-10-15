import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { darkTheme } from './configurations/theme'
import { DataProvider } from './contexts/DataContext'
import { DeviceProvider } from './contexts/DeviceContext'
import { SquadBuilder } from './routes/squadBuilder'
import { MainScreen } from './routes/mainScreen'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainScreen />,
    },
    {
        path: '/app',
        element: <SquadBuilder />,
    },
])

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline enableColorScheme>
                <DeviceProvider>
                    <DataProvider>
                        <RouterProvider router={router} />
                    </DataProvider>
                </DeviceProvider>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
