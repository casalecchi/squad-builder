import { Add, Close } from '@mui/icons-material'
import { Avatar, Box, IconButton, IconButtonProps, Stack, Typography } from '@mui/material'
import { FC, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../../../@types/i18n'
import { useDataContext } from '../../../contexts/DataContext'
import { useDeviceContext } from '../../../contexts/DeviceContext'
import { Player, PlayerArea, Team } from '../../../models'
import colors from '../../../styles/colors.module.scss'
import { formatPlayerName } from '../../../utils/formatters'

interface PlayerProps extends IconButtonProps {
    player?: Player
    playerArea: PlayerArea
    positionKey: keyof Team
}

const PlayerButton: FC<PlayerProps> = ({ player, playerArea, positionKey, ...props }) => {
    const { t } = useTranslation()
    const { mobile, bigScreen } = useDeviceContext()
    const [isHovered, setIsHovered] = useState(false)
    const { teamStateManager, openMarket } = useDataContext()
    const { removePlayer } = teamStateManager
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleRemove = (player: Player) => {
        if (isHovered) {
            removePlayer(positionKey, player)
            setIsHovered(false)
        } else {
            setIsHovered(true)
        }
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            setIsHovered(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const buttonSize = { xs: '2rem', md: '3.5rem' }

    return (
        <>
            <Stack
                alignItems={'center'}
                spacing={0.5}
                sx={{
                    position: 'absolute',
                    bottom: bigScreen ? `calc(${playerArea.bottom} + 4%)` : playerArea.bottom,
                    left: playerArea.left,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <IconButton
                    disableRipple
                    onClick={() => (player?.name ? handleRemove(player) : openMarket(positionKey))}
                    onMouseEnter={mobile ? undefined : () => setIsHovered(true)}
                    onMouseLeave={mobile ? undefined : () => setIsHovered(false)}
                    ref={buttonRef}
                    sx={{
                        backgroundColor: colors.playerGreen,
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
                    {player?.name ? (
                        <Avatar sx={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
                            <img height={'100%'} src={player.photo} style={{ zIndex: 0 }} />
                            {isHovered && (
                                <>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            height: '100%',
                                            width: '100%',
                                            backgroundColor: colors.playerRed,
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
                    {formatPlayerName(player?.name) ??
                        t(`position.abbreviations.${playerArea.code}` as TranslationKey)}
                </Typography>
            </Stack>
        </>
    )
}

export default PlayerButton
