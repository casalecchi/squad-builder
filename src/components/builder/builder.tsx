import { Stack } from '@mui/material'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDeviceContext } from '../../contexts/DeviceContext'
import { OptionsCard } from '../ui/optionsCard'
import { StatsTabs } from './statsTabs'
import { SquadCard } from './team/squadCard'
import { TeamDetails } from './team/teamDetails'

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
            spacing={mobile ? 1 : 2}
        >
            {mobile && <OptionsCard />}
            <SquadCard />
            <Stack flex={mobile ? undefined : 6} spacing={1}>
                {!mobile && <OptionsCard />}
                <TeamDetails />
                <StatsTabs />
            </Stack>
        </Stack>
    )
}

export default Builder
