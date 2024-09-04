import { Add, Close } from '@mui/icons-material'
import { Stack, IconButton, Typography, Avatar, Box, IconButtonProps } from '@mui/material'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import colors from '../styles/colors.module.scss'
import { Position } from '../models'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../@types/i18n'
import cano from '../assets/player.png'
import { Player } from '../models/player'

interface PlayerProps extends IconButtonProps {
    player?: Player
    position: Position
    setPlayer: Dispatch<SetStateAction<Player | undefined>>
}

const PlayerButton: FC<PlayerProps> = ({ player, position, setPlayer, ...props }) => {
    const { t } = useTranslation()
    const [isHovered, setIsHovered] = useState(false)

    const buttonSize = { xs: '2rem', md: '3.5rem' }

    useEffect(() => {
        console.log(player)
    }, [player])

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
                disableRipple
                onClick={() => setPlayer(player ? undefined : player)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    backgroundColor: colors.lightGreen,
                    boxShadow: '3px 3px 3px green',
                    padding: 0,
                    height: buttonSize,
                    width: buttonSize,
                    transition: '0.3s ease-out',
                    '&:hover': {
                        transform: 'scale(1.15)',
                    },
                }}
                {...props}
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
                    <Add sx={{ color: 'text.primary', fontSize: '2rem' }} />
                )}
            </IconButton>
            <Typography sx={{ fontWeight: 700, textShadow: '0px 2px 2px black' }}>
                {player?.name ?? t(`position.${position.code}` as TranslationKey)}
            </Typography>
        </Stack>
    )
}

export default PlayerButton
