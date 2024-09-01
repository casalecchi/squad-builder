import { Add } from '@mui/icons-material'
import { Stack, IconButton, Typography, Avatar } from '@mui/material'
import { FC } from 'react'
import colors from '../styles/colors.module.scss'
import { Position } from '../models'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../@types/i18n'
import cano from '../assets/player.png'
import { Player } from '../models/player'

interface PlayerProps {
    player?: Player
    position: Position
}

const PlayerButton: FC<PlayerProps> = ({ player, position }) => {
    const { t } = useTranslation()
    const avatarSize = { xs: '2rem', md: '3.5rem' }

    return (
        <Stack
            alignItems={'center'}
            sx={{
                position: 'absolute',
                bottom: position.bottom,
                left: position.left,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <IconButton
                sx={{
                    backgroundColor: colors.purple,
                    padding: 0,
                }}
            >
                {player?.name ? (
                    <Avatar sx={{ height: avatarSize, width: avatarSize }}>
                        <img height={'100%'} src={cano} />
                    </Avatar>
                ) : (
                    <Add color={'secondary'} />
                )}
            </IconButton>
            <Typography>
                {player?.name ?? t(`position.${position.code}` as TranslationKey)}
            </Typography>
        </Stack>
    )
}

export default PlayerButton
