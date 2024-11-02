import { Divider, Stack } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { teamPositionMap } from '../../../constants'
import { useDataContext } from '../../../contexts/DataContext'
import { useDeviceContext } from '../../../contexts/DeviceContext'
import { Player } from '../../../models'
import MarketDialog from '../../ui/marketDialog'
import { MobileRow, SiteRow } from './marketRow'

const Market: FC = () => {
    const { mobile } = useDeviceContext()
    const { teamStateManager, positionToShow, closeMarket } = useDataContext()
    const { team, formation, players, clubs, matches, addPlayer, removePlayer } = teamStateManager
    const [isFull, setIsFull] = useState<boolean>(false)

    const handleBuy = (player: Player) => {
        addPlayer(positionToShow, player)
    }

    const handleSell = (player: Player) => {
        removePlayer(positionToShow, player)
    }

    useEffect(() => {
        setIsFull(formation[positionToShow].length == team[positionToShow].length)
    }, [positionToShow, team])

    useEffect(() => {
        if (isFull) closeMarket()
    }, [isFull])

    return (
        <MarketDialog>
            <Stack divider={<Divider />} overflow={'auto'} pb={2} px={2} spacing={2}>
                {(players ?? [])
                    .filter((p) => p.position == teamPositionMap[positionToShow])
                    .map((player) => {
                        const isOnTeam = !!team[positionToShow].find((p) => p.id == player.id)
                        return mobile ? (
                            <MobileRow
                                clubName={clubs[player.clubId]?.name}
                                handleBuy={handleBuy}
                                handleSell={handleSell}
                                isOnTeam={isOnTeam}
                                key={player.id}
                                match={matches[player.clubId]}
                                player={player}
                            />
                        ) : (
                            <SiteRow
                                clubName={clubs[player.clubId]?.name}
                                handleBuy={handleBuy}
                                handleSell={handleSell}
                                isOnTeam={isOnTeam}
                                key={player.id}
                                match={matches[player.clubId]}
                                player={player}
                            />
                        )
                    })}
            </Stack>
        </MarketDialog>
    )
}

export default Market
