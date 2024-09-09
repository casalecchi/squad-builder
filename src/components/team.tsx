import { FC, useState } from 'react'
import PlayerButton from './playerButton'
import { TeamStateManager } from '../hooks/useTeamStateManager'
import PlayersDialog from './playersDialog'

interface TeamProps {
    teamStateManager: TeamStateManager
}

const Team: FC<TeamProps> = ({ teamStateManager }) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const { team, formation } = teamStateManager

    return (
        <>
            <PlayersDialog
                open={openDialog}
                setOpen={setOpenDialog}
                teamStateManager={teamStateManager}
            />
            {formation.goalkeeperPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.goalkeeper[index] ?? undefined}
                    position={pos}
                    positionIndex={index}
                    positionKey={'goalkeeper'}
                    setOpenDialog={setOpenDialog}
                    teamStateManager={teamStateManager}
                />
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
