import { Avatar, Button, Stack, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Player } from '../../../models'
import colors from '../../../styles/colors.module.scss'
import StatusIcon from '../../ui/statusIcon'

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
        <Stack alignItems={'center'} direction={'row'} spacing={1}>
            <Avatar
                alt={player.name}
                src={player.photo}
                sx={{ height: 85, width: 85 }}
                variant={'square'}
            />
            <Stack flex={2} pl={1} spacing={-0.5}>
                <Typography fontSize={'1.4rem'}>{player.name}</Typography>
                <Typography fontSize={'0.95rem'} sx={{ opacity: 0.4 }}>
                    {clubName}
                </Typography>
            </Stack>
            <Stack flex={1}>{match}</Stack>
            <Stack alignItems={'center'} flex={1}>
                <StatusIcon status={player.status} />
            </Stack>
            <Stack
                alignItems={'center'}
                direction={'row'}
                flex={5}
                justifyContent={'space-between'}
            >
                <Stack alignItems={'center'}>
                    <Typography fontSize={'1rem'} sx={{ opacity: 0.4 }}>
                        {t('market.row.last').toUpperCase()}
                    </Typography>
                    <Typography fontSize={'1.2rem'}>{player.lastPoint}</Typography>
                </Stack>
                <Stack alignItems={'center'}>
                    <Typography fontSize={'1rem'} sx={{ opacity: 0.4 }}>
                        {t('market.row.average').toUpperCase()}
                    </Typography>
                    <Typography fontSize={'1.2rem'}>{player.average}</Typography>
                </Stack>
                <Stack alignItems={'center'}>
                    <Typography fontSize={'1rem'} sx={{ opacity: 0.4 }}>
                        {t('market.row.games').toUpperCase()}
                    </Typography>
                    <Typography fontSize={'1.2rem'}>{player.totalGames}</Typography>
                </Stack>
            </Stack>
            <Typography
                flex={1.5}
                fontSize={'1.5rem'}
                textAlign={'center'}
            >{`${t('common.money')}${player.price}`}</Typography>
            <Button
                onClick={() => (isOnTeam ? handleSell(player) : handleBuy(player))}
                sx={{
                    color: 'white',
                    backgroundColor: isOnTeam ? colors.playerRed : colors.playerGreen,
                    borderRadius: 8,
                    justifyContent: 'center',
                    flex: 1,
                    fontSize: '1.2rem',
                }}
            >
                {t(isOnTeam ? 'builder.sell' : 'builder.buy').toUpperCase()}
            </Button>
        </Stack>
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
