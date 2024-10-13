import { Add, Close } from '@mui/icons-material'
import { Stack, IconButton, Typography, Avatar, Box, IconButtonProps } from '@mui/material'
import { FC, useState } from 'react'
import colors from '../../../styles/colors.module.scss'
import { Player, PlayerArea, Team } from '../../../models'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../../../@types/i18n'
import { formatPlayerName } from '../../../utils/formatters'
import { useDataContext } from '../../../contexts/DataContext'
import { useDeviceContext } from '../../../contexts/DeviceContext'

interface PlayerProps extends IconButtonProps {
    player?: Player
    playerArea: PlayerArea
    positionKey: keyof Team
}

const PlayerButton: FC<PlayerProps> = ({ player, playerArea, positionKey, ...props }) => {
    const { t } = useTranslation()
    const { bigScreen } = useDeviceContext()
    const [isHovered, setIsHovered] = useState(false)
    const { teamStateManager, openMarket } = useDataContext()
    const { removePlayer } = teamStateManager

    const handleRemove = (player: Player) => {
        removePlayer(positionKey, player)
    }

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
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
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
