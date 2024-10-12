import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './configurations/i18n.ts'
import './styles/globals.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SquadBuilder } from './routes/squadBuilder.tsx'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { darkTheme } from './configurations/theme.ts'
import { DataProvider } from './contexts/DataContext.tsx'
import { DeviceProvider } from './contexts/DeviceContext.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/app',
        element: <SquadBuilder />,
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline enableColorScheme>
                <DeviceProvider>
                    <DataProvider>
                        <RouterProvider router={router} />
                    </DataProvider>
                </DeviceProvider>
            </CssBaseline>
        </ThemeProvider>
    </StrictMode>
)
