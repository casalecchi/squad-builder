import { FC } from 'react'
import PlayerButton from './playerButton'
import { TeamStateManager } from '../hooks/useTeamStateManager'

interface TeamProps {
    teamStateManager: TeamStateManager
}

const Team: FC<TeamProps> = ({ teamStateManager }) => {
    const { team, formation } = teamStateManager

    return (
        <>
            {formation.goalkeeperPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.goalkeeper[index] ?? undefined}
                    playerArea={pos}
                    positionIndex={index}
                    positionKey={'goalkeeper'}
                    teamStateManager={teamStateManager}
                />
            ))}
            {formation.wingersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.wingers[index]}
                    playerArea={pos}
                    positionIndex={index}
                    positionKey={'wingers'}
                    teamStateManager={teamStateManager}
                />
            ))}
            {formation.defendersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.defenders[index]}
                    playerArea={pos}
                    positionIndex={index}
                    positionKey={'defenders'}
                    teamStateManager={teamStateManager}
                />
            ))}
            {formation.midfieldersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.midfielders[index]}
                    playerArea={pos}
                    positionIndex={index}
                    positionKey={'midfielders'}
                    teamStateManager={teamStateManager}
                />
            ))}
            {formation.strikersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.strikers[index]}
                    playerArea={pos}
                    positionIndex={index}
                    positionKey={'strikers'}
                    teamStateManager={teamStateManager}
                />
            ))}
        </>
    )
}

export default Team
