import { FC } from 'react'
import { Stack } from '@mui/material'
import Cover from './cover'
import HowItWorks from './howItWorks'
import SettingsMenu from './settingsMenu'

const Page: FC = () => {
    return (
        <Stack display={'flex'}>
            <Cover />
            <HowItWorks />
            <SettingsMenu />
        </Stack>
    )
}

export default Page
