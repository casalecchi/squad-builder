import { FC } from 'react'
import PlayerButton from './playerButton'
import { TeamStateManager } from '../hooks/useTeamStateManager'

interface TeamProps {
    teamStateManager: TeamStateManager
}

const Team: FC<TeamProps> = ({ teamStateManager }) => {
    const { team, formation, removePlayer } = teamStateManager

    return (
        <>
            {formation.goalkeeperPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.goalkeeper[index] ?? undefined}
                    position={pos}
                    positionIndex={index}
                    positionKey={'goalkeeper'}
                    removePlayer={removePlayer}
                />
            ))}
            {formation.wingersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.wingers[index]}
                    position={pos}
                    positionIndex={index}
                    positionKey={'wingers'}
                    removePlayer={removePlayer}
                />
            ))}
            {formation.defendersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.defenders[index]}
                    position={pos}
                    positionIndex={index}
                    positionKey={'defenders'}
                    removePlayer={removePlayer}
                />
            ))}
            {formation.midfieldersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.midfielders[index]}
                    position={pos}
                    positionIndex={index}
                    positionKey={'midfielders'}
                    removePlayer={removePlayer}
                />
            ))}
            {formation.strikersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.strikers[index]}
                    position={pos}
                    positionIndex={index}
                    positionKey={'strikers'}
                    removePlayer={removePlayer}
                />
            ))}
        </>
    )
}

export default Team
