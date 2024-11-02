import {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useMemo,
    useState,
} from 'react'
import { TeamStateManager, useTeamStateManager } from '../hooks/useTeamStateManager'
import { StatMetric, Team } from '../models'

interface DataStateContext {
    teamStateManager: TeamStateManager
    isMarketOpen: boolean
    positionToShow: keyof Team
    defaultMetric: StatMetric
    openMarket: (positionKey: keyof Team) => void
    closeMarket: () => void
    setDefaultMetric: Dispatch<SetStateAction<StatMetric>>
}

export const DataContext = createContext<DataStateContext>({} as DataStateContext)

export const DataProvider: FC<PropsWithChildren> = (props) => {
    const teamStateManager = useTeamStateManager()
    const [defaultMetric, setDefaultMetric] = useState<StatMetric>('game')

    // TODO - separate on own hook
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
        () => ({
            teamStateManager,
            isMarketOpen,
            positionToShow,
            defaultMetric,
            openMarket,
            closeMarket,
            setDefaultMetric,
        }),
        [teamStateManager]
    )

    return <DataContext.Provider value={dataContextValue}>{props.children}</DataContext.Provider>
}

// TODO - watch if warning continues, if so create contexts.ts on utils
export const useDataContext = () => useContext(DataContext)
