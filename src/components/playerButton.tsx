import { Add, Close } from '@mui/icons-material'
import { Stack, IconButton, Typography, Avatar, Box, IconButtonProps } from '@mui/material'
import { FC, useState } from 'react'
import colors from '../styles/colors.module.scss'
import { Player, PlayerArea, Team } from '../models'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../@types/i18n'
import { TeamStateManager } from '../hooks/useTeamStateManager'
import PlayersDialog from './playersDialog'

interface PlayerProps extends IconButtonProps {
    player?: Player
    playerArea: PlayerArea
    positionIndex: number
    positionKey: keyof Team
    teamStateManager: TeamStateManager
}

const PlayerButton: FC<PlayerProps> = ({
    player,
    playerArea,
    positionIndex,
    positionKey,
    teamStateManager,
    ...props
}) => {
    const { t } = useTranslation()
    const [isHovered, setIsHovered] = useState(false)
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const { removePlayer } = teamStateManager

    const handleAdd = () => {
        setOpenDialog(true)
    }

    const handleRemove = () => {
        removePlayer(positionKey, positionIndex)
    }

    const buttonSize = { xs: '2rem', md: '3.5rem' }

    return (
        <>
            <PlayersDialog
                open={openDialog}
                positionIndex={positionIndex}
                positionKey={positionKey}
                setOpen={setOpenDialog}
                teamStateManager={teamStateManager}
            />
            <Stack
                alignItems={'center'}
                spacing={0.5}
                sx={{
                    position: 'absolute',
                    bottom: playerArea.bottom,
                    left: playerArea.left,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <IconButton
                    disableRipple
                    onClick={() => (player?.name ? handleRemove() : handleAdd())}
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
                    {player?.name ??
                        t(`position.abbreviations.${playerArea.code}` as TranslationKey)}
                </Typography>
            </Stack>
        </>
    )
}

export default PlayerButton
