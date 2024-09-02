import { Box, Stack, Typography } from '@mui/material'
import { FC, useState } from 'react'
import pitch from '../assets/campinho.svg'
import { useTranslation } from 'react-i18next'
import FormationSelector from './formationSelector'
import { fourThreeThree } from '../utils/formations'
import Team from './team'
import { Formation } from '../models'

const Builder: FC = () => {
    const { t } = useTranslation()
    const [formation, setFormation] = useState<Formation>(fourThreeThree)

    return (
        <Stack alignItems={'center'}>
            <Typography mb={2} variant="h3">
                {t('builder.lineup').toUpperCase()}
            </Typography>
            <FormationSelector formationSelected={formation} mb={2} setFormation={setFormation} />
            <Box height={'85vh'} position={'relative'}>
                <img alt={t('images.pitch')} height={'100%'} src={pitch} />
                <Team formation={formation.playersPositions} />
            </Box>
        </Stack>
    )
}

export default Builder
