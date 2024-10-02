import { FC, useEffect, useState } from 'react'
import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    ListSubheader,
    Typography,
    Stack,
} from '@mui/material'
import colors from '../styles/colors.module.scss'
import StatusIcon from './ui/statusIcon'
import { Player } from '../models'
import { teamPositionMap } from '../constants'
import { useTranslation } from 'react-i18next'
import { useDataContext } from '../contexts/DataContext'
import MarketDialog from './ui/marketDialog'
import { formatNumber } from '../utils'

const CartolaMarket: FC = () => {
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
            <List subheader={<li />} sx={{ overflowY: 'scroll' }}>
                <ListSubheader sx={{ backgroundColor: '#393939' }}>
                    <Stack direction={'row'}>
                        <Typography flex={1}></Typography>
                        <Typography flex={1}>{t('market.columns.status')}</Typography>
                        <Typography flex={1}>{t('market.columns.price')}</Typography>
                        <Typography flex={1}>{t('market.columns.lastPoint')}</Typography>
                        <Typography flex={1}>{t('market.columns.average')}</Typography>
                        <Typography flex={1}></Typography>
                        <Typography flex={1}></Typography>
                    </Stack>
                </ListSubheader>
                {(players ?? [])
                    .filter((p) => p.position == teamPositionMap[positionToShow])
                    .map((player) => {
                        const isOnTeam = team[positionToShow].find((p) => p.id == player.id)

                        return (
                            <ListItem divider key={player.id} sx={{ display: 'flex' }}>
                                <ListItemAvatar
                                    sx={{ width: '4rem', height: '4rem', marginRight: 2 }}
                                >
                                    <Avatar
                                        alt={player.name}
                                        src={player.photo}
                                        sx={{ height: '100%', width: '100%' }}
                                        variant="square"
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={player.name}
                                    secondary={clubs[player.clubId]?.name}
                                    sx={{ flex: 2 }}
                                />
                                <ListItemIcon sx={{ flex: 1 }}>
                                    <StatusIcon status={player.status} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`C$${formatNumber(player.price)}`}
                                    sx={{ flex: 1 }}
                                />
                                <ListItemText
                                    primary={formatNumber(player.lastPoint ?? 0)}
                                    sx={{ flex: 1 }}
                                />
                                <ListItemText
                                    primary={formatNumber(player.average)}
                                    sx={{ flex: 1 }}
                                />
                                <ListItemText primary={player.totalGames} sx={{ flex: 1 }} />
                                <ListItemAvatar sx={{ flex: 2, minWidth: '1rem', marginRight: 1 }}>
                                    {matches[player.clubId]}
                                </ListItemAvatar>
                                <ListItemButton
                                    onClick={() =>
                                        isOnTeam ? handleSell(player) : handleBuy(player)
                                    }
                                    sx={{
                                        backgroundColor: isOnTeam ? 'red' : colors.lightGreen,
                                        borderRadius: 8,
                                        justifyContent: 'center',
                                        flex: 1,
                                    }}
                                >
                                    {t(isOnTeam ? 'builder.sell' : 'builder.buy').toUpperCase()}
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
            </List>
        </MarketDialog>
    )
}

export default CartolaMarket
