import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitch from './LanguageSwitch'

const Field: FC = () => {
    const { t: intl } = useTranslation()

    return (
        <Stack alignItems={'center'} justifyContent={'center'}>
            <Box height={'10rem'} sx={{ backgroundColor: 'secondary.main' }} width={'10rem'}>
                <Typography>{intl('app.description')}</Typography>
                <LanguageSwitch />
            </Box>
        </Stack>
    )
}

export default Field
