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
            <Box height={'85vh'} position={'relative'}>
                <img alt={t('images.pitch')} height={'100%'} src={pitch} />
                <Team teamStateManager={teamStateManager} />
            </Box>
        </Stack>
    )
}

export default Builder
