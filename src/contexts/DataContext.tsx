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
    metricTypes: StatMetric[]
    openMarket: (positionKey: keyof Team) => void
    closeMarket: () => void
    setDefaultMetric: Dispatch<SetStateAction<StatMetric>>
    setMetricTypes: Dispatch<SetStateAction<StatMetric[]>>
}

export const DataContext = createContext<DataStateContext>({} as DataStateContext)

export const DataProvider: FC<PropsWithChildren> = (props) => {
    const teamStateManager = useTeamStateManager()

    // TODO - separate on own hook
    const [defaultMetric, setDefaultMetric] = useState<StatMetric>('game')
    const [metricTypes, setMetricTypes] = useState<StatMetric[]>(['game', '90min', 'total'])

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
            metricTypes,
            openMarket,
            closeMarket,
            setDefaultMetric,
            setMetricTypes,
        }),
        [teamStateManager]
    )

    return <DataContext.Provider value={dataContextValue}>{props.children}</DataContext.Provider>
}

// TODO - watch if warning continues, if so create contexts.ts on utils
export const useDataContext = () => useContext(DataContext)
