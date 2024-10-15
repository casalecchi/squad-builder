import { Stack } from '@mui/material'
import { FC, useEffect } from 'react'
import { useDeviceContext } from '../../contexts/DeviceContext'
import { statsCards } from '../../constants/card'
import { useTranslation } from 'react-i18next'
import { OptionsCard } from '../ui/optionsCard'
import { SquadCard } from './team/squadCard'
import { StackedStatCards } from './stats/stackedStatCards'

const Builder: FC = () => {
    const { mobile } = useDeviceContext()
    const { i18n } = useTranslation()
    const { language, changeLanguage } = i18n

    useEffect(() => {
        changeLanguage(localStorage.getItem('lang') ?? language)
    }, [])

    return (
        <Stack
            direction={mobile ? 'column' : 'row'}
            height={mobile ? undefined : '100vh'}
            p={2}
            spacing={2}
        >
            {mobile && <OptionsCard />}
            <SquadCard />
            <Stack flex={mobile ? undefined : 6} spacing={1}>
                {!mobile && <OptionsCard />}
                <Stack direction={mobile ? 'column' : 'row'} spacing={1} sx={{ overflowY: 'auto' }}>
                    <StackedStatCards cards={statsCards.filter((card) => !card.negative)} />
                    <StackedStatCards cards={statsCards.filter((card) => card.negative)} />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Builder
