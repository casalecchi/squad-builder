import { FC } from 'react'
import { Position } from '../models'
import Player from './player'

interface TeamProps {
    formation: Position[]
}

const Team: FC<TeamProps> = ({ formation }) => {
    return (
        <>
            {formation.map((pos, index) => (
                <Player key={index} position={pos} />
            ))}
        </>
    )
}

export default Team
