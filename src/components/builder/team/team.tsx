import { FC } from 'react'
import { useDataContext } from '../../../contexts/DataContext'
import PlayerButton from './playerButton'

const Team: FC = () => {
    const { teamStateManager } = useDataContext()
    const { team, formation } = teamStateManager

    return (
        <>
            {formation.goalkeeper?.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.goalkeeper[index] ?? undefined}
                    playerArea={pos}
                    positionKey={'goalkeeper'}
                />
            ))}
            {formation.wingers?.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.wingers[index]}
                    playerArea={pos}
                    positionKey={'wingers'}
                />
            ))}
            {formation.defenders?.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.defenders[index]}
                    playerArea={pos}
                    positionKey={'defenders'}
                />
            ))}
            {formation.midfielders?.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.midfielders[index]}
                    playerArea={pos}
                    positionKey={'midfielders'}
                />
            ))}
            {formation.strikers?.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.strikers[index]}
                    playerArea={pos}
                    positionKey={'strikers'}
                />
            ))}
            {formation.manager?.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.manager[index]}
                    playerArea={pos}
                    positionKey={'manager'}
                />
            ))}
        </>
    )
}

export default Team
