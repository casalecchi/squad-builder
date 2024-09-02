import { Add, Close } from '@mui/icons-material'
import { Stack, IconButton, Typography, Avatar, Box } from '@mui/material'
import { FC, useState } from 'react'
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
    const [isHovered, setIsHovered] = useState(false)

    const buttonSize = { xs: '2rem', md: '3.5rem' }

    return (
        <Stack
            alignItems={'center'}
            spacing={0.5}
            sx={{
                position: 'absolute',
                bottom: position.bottom,
                left: position.left,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <IconButton
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    backgroundColor: colors.purple,
                    padding: 0,
                    height: buttonSize,
                    width: buttonSize,
                    '&:hover': {
                        transform: 'scale(1.15)',
                    },
                }}
            >
                {player ? (
                    <Avatar sx={{ height: '100%', width: '100%' }}>
                        <img height={'100%'} src={cano} style={{ zIndex: 0 }} />
                        {isHovered && (
                            <>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        backgroundColor: 'red',
                                        opacity: 0.3,
                                        zIndex: 1,
                                    }}
                                ></Box>
                                <Close
                                    sx={{
                                        position: 'absolute',
                                        color: 'white',
                                        fontSize: '2rem',
                                        zIndex: 2,
                                    }}
                                />
                            </>
                        )}
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
