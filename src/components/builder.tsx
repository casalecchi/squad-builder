import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import pitch from '../assets/campinho.svg'
import { useTranslation } from 'react-i18next'
import FormationSelector from './formationSelector'
import Team from './team'
import { useDataContext } from '../contexts/DataContext'

const Builder: FC = () => {
    const { t } = useTranslation()
    const { teamStateManager } = useDataContext()
    const { formation, changeFormation } = teamStateManager

    return (
        <Stack alignItems={'center'}>
            <Typography mb={2} variant="h3">
                {t('builder.lineup').toUpperCase()}
            </Typography>
            <FormationSelector
                changeFormation={changeFormation}
                formationSelected={formation}
                mb={2}
            />
            <Box position={'relative'} sx={{ xs: { width: '100%' }, md: { height: '85vh' } }}>
                <img alt={t('images.pitch')} src={pitch} width={'100%'} />
                <Team />
            </Box>
        </Stack>
    )
}

export default Builder
