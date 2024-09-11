import { Dispatch, FC, SetStateAction } from 'react'
import {
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    ListItemIcon,
    ListItemButton,
} from '@mui/material'
import { TeamStateManager } from '../hooks/useTeamStateManager'
import colors from '../styles/colors.module.scss'
import StatusIcon from './ui/statusIcon'
import { Player, Team } from '../models'
import { teamPositionMap } from '../constants'

interface PlayersDialogProps {
    open: boolean
    positionKey: keyof Team
    teamStateManager: TeamStateManager
    setOpen: Dispatch<SetStateAction<boolean>>
}

const PlayersDialog: FC<PlayersDialogProps> = ({
    open,
    positionKey,
    teamStateManager,
    setOpen,
}) => {
    const { players, clubs, addPlayer } = teamStateManager

    const handleBuy = (player: Player) => {
        addPlayer(positionKey, player)
        setOpen(false)
    }

    return (
        <Dialog fullWidth maxWidth={'lg'} onClose={() => setOpen(false)} open={open}>
            <DialogTitle>Choose player</DialogTitle>
            <List sx={{ overflowY: 'scroll' }}>
                {players
                    .filter((p) => p.position == teamPositionMap[positionKey])
                    .sort((a, b) => b.price - a.price)
                    .map((player) => (
                        <ListItem divider key={player.id} sx={{ display: 'flex' }}>
                            <ListItemAvatar sx={{ minWidth: '2rem', marginRight: 1 }}>
                                <Avatar
                                    alt={player.name}
                                    src={clubs[player.clubId].photo}
                                    sx={{ height: '2rem', width: '2rem' }}
                                    variant={'square'}
                                />
                            </ListItemAvatar>
                            <ListItemAvatar sx={{ width: '4rem', height: '4rem', marginRight: 2 }}>
                                <Avatar
                                    alt={player.name}
                                    src={player.photo}
                                    sx={{ height: '100%', width: '100%' }}
                                    variant="square"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={player.name}
                                secondary={clubs[player.clubId].name}
                                sx={{ flex: 1 }}
                            />
                            <ListItemIcon sx={{ flex: 1 }}>
                                <StatusIcon status={player.status} />
                            </ListItemIcon>
                            <ListItemText primary={`C$${player.price}`} sx={{ flex: 1 }} />
                            <ListItemButton
                                onClick={() => handleBuy(player)}
                                sx={{
                                    backgroundColor: colors.lightGreen,
                                    borderRadius: 8,
                                    justifyContent: 'center',
                                    flex: 1,
                                }}
                            >
                                {'BUY'}
                            </ListItemButton>
                        </ListItem>
                    ))}
            </List>
        </Dialog>
    )
}

export default PlayersDialog
