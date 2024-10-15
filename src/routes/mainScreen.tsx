import { Stack } from '@mui/material'
import { FC, useEffect } from 'react'
import Cover from '../components/cover'
import HowItWorks from '../components/howItWorks'
import SettingsMenu from '../components/settingsMenu'
import { useTranslation } from 'react-i18next'

export const MainScreen: FC = () => {
    const { i18n } = useTranslation()
    const { language, changeLanguage } = i18n

    useEffect(() => {
        changeLanguage(localStorage.getItem('lang') ?? language)
    }, [])

    return (
        <Stack display={'flex'}>
            <Cover />
            <HowItWorks />
            <SettingsMenu />
        </Stack>
    )
}
