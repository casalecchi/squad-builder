import { FC, ReactNode } from 'react'
import { Player } from '../../../models'
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    Stack,
    Typography,
    Avatar,
    Button,
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
                    backgroundColor: isOnTeam ? colors.playerRed : colors.playerGreen,
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
        <Stack alignItems={'center'} direction={'row'} spacing={1}>
            <Avatar
                alt={player.name}
                src={player.photo}
                sx={{ height: 100, width: 100 }}
                variant={'square'}
            />
            <Stack spacing={1} width={'100%'}>
                <Stack alignItems={'center'} direction={'row'} spacing={2}>
                    <StatusIcon status={player.status} />
                    <Stack
                        alignItems={'center'}
                        direction={'row'}
                        justifyContent={'space-between'}
                        width={'100%'}
                    >
                        <Typography fontSize={'1.2rem'}>{player.name}</Typography>
                        <Typography fontSize={'0.75rem'} sx={{ opacity: 0.4 }}>
                            {clubName}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack
                    alignItems={'center'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    pl={1}
                >
                    {match}
                    <Stack alignItems={'center'}>
                        <Typography fontSize={'0.8rem'} sx={{ opacity: 0.4 }}>
                            {t('market.row.last').toUpperCase()}
                        </Typography>
                        <Typography>{player.lastPoint}</Typography>
                    </Stack>
                    <Stack alignItems={'center'}>
                        <Typography fontSize={'0.8rem'} sx={{ opacity: 0.4 }}>
                            {t('market.row.average').toUpperCase()}
                        </Typography>
                        <Typography>{player.average}</Typography>
                    </Stack>
                    <Stack alignItems={'center'}>
                        <Typography fontSize={'0.8rem'} sx={{ opacity: 0.4 }}>
                            {t('market.row.games').toUpperCase()}
                        </Typography>
                        <Typography>{player.totalGames}</Typography>
                    </Stack>
                </Stack>
                <Stack
                    alignItems={'center'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    pl={1}
                >
                    <Typography
                        fontSize={'1.3rem'}
                    >{`${t('common.money')}${player.price}`}</Typography>
                    <Button
                        onClick={() => (isOnTeam ? handleSell(player) : handleBuy(player))}
                        sx={{
                            color: 'white',
                            backgroundColor: isOnTeam ? colors.playerRed : colors.playerGreen,
                            borderRadius: 8,
                            justifyContent: 'center',
                            width: '45%',
                        }}
                    >
                        {t(isOnTeam ? 'builder.sell' : 'builder.buy').toUpperCase()}
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}
