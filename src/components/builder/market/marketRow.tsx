import { FC, ReactNode } from 'react'
import { Player } from '../../../models'
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    Stack,
} from '@mui/material'
import { formatNumber } from '../../../utils'
import StatusIcon from '../../ui/statusIcon'
import colors from '../../../styles/colors.module.scss'
import { useTranslation } from 'react-i18next'
import { MarketAvatar } from './marketItems'

interface Row {
    player: Player
    isOnTeam: boolean
    clubName?: string
    match: ReactNode
    handleBuy: (player: Player) => void
    handleSell: (player: Player) => void
}

export const SiteRow: FC<Row> = ({ player, isOnTeam, clubName, match, handleBuy, handleSell }) => {
    const { t } = useTranslation()

    return (
        <ListItem divider sx={{ display: 'flex' }}>
            <MarketAvatar alt={player.name} src={player.photo} />
            <ListItemText primary={player.name} secondary={clubName} sx={{ flex: 2 }} />
            <ListItemIcon sx={{ flex: 1 }}>
                <StatusIcon status={player.status} />
            </ListItemIcon>
            <ListItemText primary={`C$${formatNumber(player.price)}`} sx={{ flex: 1 }} />
            <ListItemText primary={formatNumber(player.lastPoint ?? 0)} sx={{ flex: 1 }} />
            <ListItemText primary={formatNumber(player.average)} sx={{ flex: 1 }} />
            <ListItemText primary={player.totalGames} sx={{ flex: 1 }} />
            <ListItemAvatar sx={{ flex: 2, minWidth: '1rem', marginRight: 1 }}>
                {match}
            </ListItemAvatar>
            <ListItemButton
                onClick={() => (isOnTeam ? handleSell(player) : handleBuy(player))}
                sx={{
                    backgroundColor: isOnTeam ? 'red' : colors.playerGreen,
                    borderRadius: 8,
                    justifyContent: 'center',
                    flex: 1,
                }}
            >
                {t(isOnTeam ? 'builder.sell' : 'builder.buy').toUpperCase()}
            </ListItemButton>
        </ListItem>
    )
}

export const MobileRow: FC<Row> = ({
    player,
    isOnTeam,
    clubName,
    match,
    handleBuy,
    handleSell,
}) => {
    const { t } = useTranslation()

    return (
        <ListItem divider>
            <Stack direction={'row'}>
                <MarketAvatar alt={player.name} src={player.photo} />
                <Stack>
                    <ListItemText primary={player.name} secondary={clubName} />
                    <Stack direction={'row'}>
                        <ListItemIcon>
                            <StatusIcon status={player.status} />
                        </ListItemIcon>
                        <ListItemText primary={`C$${formatNumber(player.price)}`} />
                        <ListItemText primary={formatNumber(player.lastPoint ?? 0)} />
                        <ListItemText primary={formatNumber(player.average)} />
                        <ListItemText primary={player.totalGames} />
                        <ListItemAvatar>{match}</ListItemAvatar>
                    </Stack>
                </Stack>
                <ListItemButton
                    onClick={() => (isOnTeam ? handleSell(player) : handleBuy(player))}
                    sx={{
                        backgroundColor: isOnTeam ? 'red' : colors.playerGreen,
                        borderRadius: 8,
                        justifyContent: 'center',
                        flex: 1,
                    }}
                >
                    {t(isOnTeam ? 'builder.sell' : 'builder.buy').toUpperCase()}
                </ListItemButton>
            </Stack>
        </ListItem>
    )
}
