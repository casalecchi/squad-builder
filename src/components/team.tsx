import { FC } from 'react'
import { Position } from '../models'
import PlayerButton from './player'

interface TeamProps {
    formation: Position[]
}

const Team: FC<TeamProps> = ({ formation }) => {
    return (
        <>
            {formation.map((pos, index) => (
                <PlayerButton
                    key={index}
                    player={{ name: 'Cano', positionCode: 'st' }}
                    position={pos}
                />
            ))}
        </>
    )
}

export default Team
