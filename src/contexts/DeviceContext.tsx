import { createContext, useContext, useMemo, ReactNode } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

interface DeviceContextType {
    mobile: boolean
}

const DeviceContext = createContext<DeviceContextType>({ mobile: false })

const DeviceProvider = ({ children }: { children: ReactNode }) => {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true })

    const value = useMemo(() => ({ mobile }), [mobile])

    return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
}

export { DeviceContext, DeviceProvider }

export const useDeviceContext = () => useContext(DeviceContext)
