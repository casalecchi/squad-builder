import { FC, useState } from 'react'
import PlayerButton from './playerButton'
import { TeamStateManager } from '../hooks/useTeamStateManager'
import {
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
} from '@mui/material'

interface TeamProps {
    teamStateManager: TeamStateManager
}

const Team: FC<TeamProps> = ({ teamStateManager }) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const { team, players, formation, addPlayer } = teamStateManager

    return (
        <>
            {formation.goalkeeperPositions.map((pos, index) => (
                <>
                    <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
                        <DialogTitle>Choose player</DialogTitle>
                        <List>
                            {players.slice(0, 20).map((player) => (
                                <ListItem
                                    key={player.id}
                                    onClick={() => {
                                        addPlayer('goalkeeper', index, player)
                                        setOpenDialog(false)
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Avatar alt={player.name} src={player.photo} />
                                    </ListItemAvatar>
                                    <ListItemText>{player.name}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Dialog>
                    <PlayerButton
                        key={index}
                        player={team.goalkeeper[index] ?? undefined}
                        position={pos}
                        positionIndex={index}
                        positionKey={'goalkeeper'}
                        setOpenDialog={setOpenDialog}
                        teamStateManager={teamStateManager}
                    />
                </>
            ))}
            {formation.wingersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.wingers[index]}
                    position={pos}
                    positionIndex={index}
                    positionKey={'wingers'}
                    teamStateManager={teamStateManager}
                />
            ))}
            {formation.defendersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.defenders[index]}
                    position={pos}
                    positionIndex={index}
                    positionKey={'defenders'}
                    teamStateManager={teamStateManager}
                />
            ))}
            {formation.midfieldersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.midfielders[index]}
                    position={pos}
                    positionIndex={index}
                    positionKey={'midfielders'}
                    teamStateManager={teamStateManager}
                />
            ))}
            {formation.strikersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.strikers[index]}
                    position={pos}
                    positionIndex={index}
                    positionKey={'strikers'}
                    teamStateManager={teamStateManager}
                />
            ))}
        </>
    )
}

export default Team
