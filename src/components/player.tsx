import { Add } from '@mui/icons-material'
import { Stack, IconButton, Typography } from '@mui/material'
import { FC } from 'react'
import colors from '../styles/colors.module.scss'
import { Position } from '../models'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../@types/i18n'

interface PlayerProps {
    name?: string
    position: Position
}

const Player: FC<PlayerProps> = ({ name, position }) => {
    const { t } = useTranslation()

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
                }}
            >
                <Add color={'secondary'} />
            </IconButton>
            <Typography>{name ?? t(`position.${position.code}` as TranslationKey)}</Typography>
        </Stack>
    )
}

export default Player
