import { Box, Card, Stack } from '@mui/material'
import { FC } from 'react'
import pitch from '../assets/pitch.png'
import { useTranslation } from 'react-i18next'
import FormationSelector from './formationSelector'
// import colors from '../styles/colors.module.scss'

const Builder: FC = () => {
    const { t } = useTranslation()

    return (
        <Stack alignItems={'center'} p={{ xs: 0, md: 1 }}>
            <Card sx={{ padding: 1, maxWidth: '1280px', width: '100%' }} variant={'outlined'}>
                <Stack alignItems={'center'}>
                    <FormationSelector mb={2} />
                    <Box height={'85vh'}>
                        <img alt={t('images.pitch')} height={'100%'} src={pitch} />
                    </Box>
                </Stack>
            </Card>
        </Stack>
    )
}

export default Builder
