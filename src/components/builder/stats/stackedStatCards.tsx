import { FC } from 'react'
import { useDeviceContext } from '../../../contexts/DeviceContext'
import { Stack } from '@mui/material'
import { StatCard } from './statCard'
import { CardDetail } from '../../../models'

interface StackedStatCardsProps {
    cards: CardDetail[]
}

export const StackedStatCards: FC<StackedStatCardsProps> = ({ cards }) => {
    const { mobile } = useDeviceContext()
    return (
        <Stack flex={mobile ? undefined : 1}>
            <Stack spacing={1}>
                {cards.map((card) => (
                    <StatCard detail={card} key={card.title} />
                ))}
            </Stack>
        </Stack>
    )
}
