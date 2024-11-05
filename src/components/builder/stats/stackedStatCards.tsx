import { Stack } from '@mui/material'
import { FC } from 'react'
import { useDeviceContext } from '../../../contexts/DeviceContext'
import { CardDetail } from '../../../models'
import { StatCard } from './statCard'

interface StackedStatCardsProps {
    cards: CardDetail[]
    percentage?: boolean
}

export const StackedStatCards: FC<StackedStatCardsProps> = ({ cards, percentage }) => {
    const { mobile } = useDeviceContext()
    return (
        <Stack flex={mobile ? undefined : 1}>
            <Stack spacing={1}>
                {cards.map((card) => (
                    <StatCard
                        detail={card}
                        key={card.title}
                        typesToDisplay={percentage ? ['mean'] : undefined}
                    />
                ))}
            </Stack>
        </Stack>
    )
}
