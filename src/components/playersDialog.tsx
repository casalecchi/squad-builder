import { Dispatch, FC, SetStateAction } from 'react'
import { Check } from '@mui/icons-material'
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

interface PlayersDialogProps {
    open: boolean
    teamStateManager: TeamStateManager
    setOpen: Dispatch<SetStateAction<boolean>>
}

const PlayersDialog: FC<PlayersDialogProps> = ({ open, teamStateManager, setOpen }) => {
    const { players, clubs, addPlayer } = teamStateManager

    return (
        <Dialog fullWidth maxWidth={'lg'} onClose={() => setOpen(false)} open={open}>
            <DialogTitle>Choose player</DialogTitle>
            <List sx={{ overflowY: 'scroll' }}>
                {players
                    .filter((p) => p.positionCode == 'gk')
                    .map((player) => (
                        <ListItem divider key={player.id}>
                            <ListItemAvatar sx={{ height: '2rem', border: '1px solid red' }}>
                                <img height={'100%'} src={clubs[player.clubId].photo} />
                            </ListItemAvatar>
                            <ListItemAvatar key={player.id}>
                                <Avatar alt={player.name} src={player.photo} />
                            </ListItemAvatar>
                            <ListItemText
                                key={player.id}
                                primary={player.name}
                                secondary={clubs[player.clubId].name}
                            />
                            <ListItemIcon>
                                <Check sx={{ color: colors.lightGreen }} />
                            </ListItemIcon>
                            <ListItemText key={player.id} primary={`C$${player.price}`} />
                            <ListItemButton
                                onClick={() => {
                                    addPlayer('goalkeeper', 0, player)
                                    setOpen(false)
                                }}
                                sx={{
                                    backgroundColor: colors.lightGreen,
                                    borderRadius: 8,
                                    justifyContent: 'center',
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
