import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import pitch from '../assets/campinho.svg'
import { useTranslation } from 'react-i18next'
import FormationSelector from './formationSelector'
import { fourFiveOne } from '../utils/formations'
import Team from './team'

const Builder: FC = () => {
    const { t } = useTranslation()

    return (
        <Stack alignItems={'center'}>
            <Typography mb={2} variant="h3">
                {t('builder.lineup')}
            </Typography>
            <FormationSelector mb={2} />
            <Box height={'85vh'} position={'relative'}>
                <img alt={t('images.pitch')} height={'100%'} src={pitch} />
                <Team formation={fourFiveOne} />
            </Box>
        </Stack>
    )
}

export default Builder
