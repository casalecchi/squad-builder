import { Add, Close } from '@mui/icons-material'
import {
    Stack,
    IconButton,
    Typography,
    Avatar,
    Box,
    IconButtonProps,
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material'
import { FC, useState } from 'react'
import colors from '../styles/colors.module.scss'
import { Position } from '../models'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../@types/i18n'
import { Player, Team } from '../models/player'
import { TeamStateManager } from '../hooks/useTeamStateManager'

interface PlayerProps extends IconButtonProps {
    player?: Player
    position: Position
    positionIndex: number
    positionKey: keyof Team
    teamStateManager: TeamStateManager
}

const PlayerButton: FC<PlayerProps> = ({
    player,
    position,
    positionIndex,
    positionKey,
    teamStateManager,
    ...props
}) => {
    const { t } = useTranslation()
    const [isHovered, setIsHovered] = useState(false)
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const { players, addPlayer, removePlayer } = teamStateManager

    const handleAdd = () => {
        setOpenDialog(true)
        addPlayer(positionKey, positionIndex)
    }

    const handleRemove = () => {
        removePlayer(positionKey, positionIndex)
    }
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
            <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
                <DialogTitle>Choose player</DialogTitle>
                <List sx={{ overflow: 'scroll' }}>
                    {players.map((player, index) => (
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar alt={player.name} src={player.photo} />
                            </ListItemAvatar>
                            <ListItemText>{player.name}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Dialog>
            <Typography sx={{ fontWeight: 700, textShadow: '0px 2px 2px black' }}>
                {player?.name ?? t(`position.${position.code}` as TranslationKey)}
            </Typography>
        </Stack>
    )
}

export default PlayerButton
