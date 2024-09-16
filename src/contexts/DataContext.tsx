import { FC, PropsWithChildren, createContext, useContext, useMemo } from 'react'
import { TeamStateManager, useTeamStateManager } from '../hooks/useTeamStateManager'

interface DataStateContext {
    teamStateManager: TeamStateManager
}

const DataContext = createContext<DataStateContext>({} as DataStateContext)

const DataProvider: FC<PropsWithChildren> = (props) => {
    const teamStateManager = useTeamStateManager()
    const dataContextValue = useMemo(() => ({ teamStateManager }), [teamStateManager])

    return <DataContext.Provider value={dataContextValue}>{props.children}</DataContext.Provider>
}

export { DataContext, DataProvider }

export const useDataContext = () => useContext(DataContext)
