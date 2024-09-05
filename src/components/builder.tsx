import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import pitch from '../assets/campinho.svg'
import { useTranslation } from 'react-i18next'
import FormationSelector from './formationSelector'
import Team from './team'
import { useTeamStateManager } from '../hooks/useTeamStateManager'

const Builder: FC = () => {
    const { t } = useTranslation()
    const teamStateManager = useTeamStateManager()
    const { formation, setFormation } = teamStateManager

    return (
        <Stack alignItems={'center'}>
            <Typography mb={2} variant="h3">
                {t('builder.lineup').toUpperCase()}
            </Typography>
            <FormationSelector formationSelected={formation} mb={2} setFormation={setFormation} />
            <Box position={'relative'} sx={{ xs: { width: '100%' }, md: { height: '85vh' } }}>
                <img alt={t('images.pitch')} src={pitch} width={'100%'} />
                <Team teamStateManager={teamStateManager} />
            </Box>
        </Stack>
    )
}

export default Builder
