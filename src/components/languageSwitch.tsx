import { Switch, SwitchProps } from '@mui/material'
import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitch: FC<SwitchProps> = (switchProps) => {
    const { i18n } = useTranslation()
    const { changeLanguage, language } = i18n

    const handleChangeLanguage = () => {
        const newLanguage = language === 'en' ? 'pt' : 'en'
        localStorage.setItem('lang', newLanguage)
        changeLanguage(newLanguage)
    }

    useEffect(() => {
        changeLanguage(localStorage.getItem('lang') ?? language)
    }, [])

    return <Switch checked={language == 'pt'} onChange={handleChangeLanguage} {...switchProps} />
}

export default LanguageSwitch
