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
                    positionKey={'goalkeeper'}
                    teamStateManager={teamStateManager}
                />
            ))}
            {formation.wingersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.wingers[index]}
                    playerArea={pos}
                    positionKey={'wingers'}
                    teamStateManager={teamStateManager}
                />
            ))}
            {formation.defendersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.defenders[index]}
                    playerArea={pos}
                    positionKey={'defenders'}
                    teamStateManager={teamStateManager}
                />
            ))}
            {formation.midfieldersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.midfielders[index]}
                    playerArea={pos}
                    positionKey={'midfielders'}
                    teamStateManager={teamStateManager}
                />
            ))}
            {formation.strikersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.strikers[index]}
                    playerArea={pos}
                    positionKey={'strikers'}
                    teamStateManager={teamStateManager}
                />
            ))}
        </>
    )
}

export default Team
