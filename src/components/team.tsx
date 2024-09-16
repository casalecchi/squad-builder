import { FC } from 'react'
import PlayerButton from './playerButton'
import { Dialog, DialogTitle } from '@mui/material'
import { useDataContext } from '../contexts/DataContext'

const Team: FC = () => {
    const { teamStateManager } = useDataContext()
    const { team, formation, openSellPlayers } = teamStateManager

    return (
        <>
            <Dialog open={openSellPlayers}>
                <DialogTitle>SELL PLAYERS</DialogTitle>
            </Dialog>
            {formation.goalkeeperPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.goalkeeper[index] ?? undefined}
                    playerArea={pos}
                    positionKey={'goalkeeper'}
                />
            ))}
            {formation.wingersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.wingers[index]}
                    playerArea={pos}
                    positionKey={'wingers'}
                />
            ))}
            {formation.defendersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.defenders[index]}
                    playerArea={pos}
                    positionKey={'defenders'}
                />
            ))}
            {formation.midfieldersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.midfielders[index]}
                    playerArea={pos}
                    positionKey={'midfielders'}
                />
            ))}
            {formation.strikersPositions.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={team.strikers[index]}
                    playerArea={pos}
                    positionKey={'strikers'}
                />
            ))}
        </>
    )
}

export default Team
