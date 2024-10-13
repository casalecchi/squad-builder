import { createContext, useContext, useMemo, ReactNode } from 'react'
import { useMediaQuery } from '@mui/material'

interface DeviceContextType {
    mobile: boolean
    bigScreen: boolean
}

const DeviceContext = createContext<DeviceContextType>({ mobile: false, bigScreen: false })

const DeviceProvider = ({ children }: { children: ReactNode }) => {
    const mobile = useMediaQuery('(max-width: 1025px)', { noSsr: true })
    const bigScreen = useMediaQuery('(min-width: 2000px)', { noSsr: true })

    const value = useMemo(() => ({ mobile, bigScreen }), [mobile, bigScreen])

    return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
}

export { DeviceContext, DeviceProvider }

export const useDeviceContext = () => useContext(DeviceContext)
