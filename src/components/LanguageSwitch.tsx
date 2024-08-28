import { Switch } from '@mui/material'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitch: FC = () => {
    const { i18n } = useTranslation()
    const { changeLanguage, language } = i18n
    const [currentLanguage, setCurrentLanguage] = useState<string>(language)

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    return <Switch onChange={handleChangeLanguage} />
}

export default LanguageSwitch
