import { FC, PropsWithChildren, createContext, useContext, useMemo, useState } from 'react'
import { TeamStateManager, useTeamStateManager } from '../hooks/useTeamStateManager'
import { Team } from '../models'

interface DataStateContext {
    teamStateManager: TeamStateManager
    isMarketOpen: boolean
    positionToShow: keyof Team
    openMarket: (positionKey: keyof Team) => void
    closeMarket: () => void
}

const DataContext = createContext<DataStateContext>({} as DataStateContext)

const DataProvider: FC<PropsWithChildren> = (props) => {
    const teamStateManager = useTeamStateManager()
    const [isMarketOpen, setIsMarketOpen] = useState<boolean>(false)
    const [positionToShow, setPositionToShow] = useState<keyof Team>('goalkeeper')

    const openMarket = (positionKey: keyof Team) => {
        setIsMarketOpen(true)
        setPositionToShow(positionKey)
    }

    const closeMarket = () => {
        setIsMarketOpen(false)
    }

    const dataContextValue = useMemo(
        () => ({ teamStateManager, isMarketOpen, positionToShow, openMarket, closeMarket }),
        [teamStateManager]
    )

    return <DataContext.Provider value={dataContextValue}>{props.children}</DataContext.Provider>
}

export { DataContext, DataProvider }

export const useDataContext = () => useContext(DataContext)
