import { FC, useEffect, useState } from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, Stack } from '@mui/material'
import { Player } from '../../../models'
import { teamPositionMap } from '../../../constants'
import { useTranslation } from 'react-i18next'
import { useDataContext } from '../../../contexts/DataContext'
import MarketDialog from '../../ui/marketDialog'
import { MobileRow, SiteRow } from './marketRow'
import { useDeviceContext } from '../../../contexts/DeviceContext'

const Market: FC = () => {
    const { mobile } = useDeviceContext()
    const { t } = useTranslation()
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
            {mobile ? (
                <Stack divider={<Divider />} overflow={'auto'} px={2} spacing={2}>
                    {(players ?? [])
                        .filter((p) => p.position == teamPositionMap[positionToShow])
                        .map((player) => {
                            const isOnTeam = !!team[positionToShow].find((p) => p.id == player.id)
                            return (
                                <MobileRow
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
            ) : (
                <List subheader={<li />} sx={{ overflowY: 'scroll' }}>
                    <ListSubheader sx={{ backgroundColor: '#393939' }}>
                        <ListItem>
                            <ListItemText sx={{ width: '4rem' }}></ListItemText>
                            <ListItemText sx={{ flex: 1 }}>
                                {t('market.columns.status')}
                            </ListItemText>
                            <ListItemText sx={{ flex: 1 }}>
                                {t('market.columns.price')}
                            </ListItemText>
                            {!mobile && (
                                <>
                                    <ListItemText sx={{ flex: 1 }}>
                                        {t('market.columns.lastPoint')}
                                    </ListItemText>
                                    <ListItemText sx={{ flex: 1 }}>
                                        {t('market.columns.average')}
                                    </ListItemText>
                                </>
                            )}
                            <ListItemText sx={{ flex: 1 }}></ListItemText>
                            <ListItemText sx={{ flex: 1 }}></ListItemText>
                        </ListItem>
                    </ListSubheader>
                    {(players ?? [])
                        .filter((p) => p.position == teamPositionMap[positionToShow])
                        .map((player) => {
                            const isOnTeam = !!team[positionToShow].find((p) => p.id == player.id)

                            return (
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
                </List>
            )}
        </MarketDialog>
    )
}

export default Market
