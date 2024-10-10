import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import pitch from '../../assets/campinho.svg'
import { useTranslation } from 'react-i18next'
import FormationSelector from './formationSelector'
import Team from './team/team'
import { useDataContext } from '../../contexts/DataContext'
import FormationAdjustment from './formationAdjustment'
import { formatNumber } from '../../utils'
import Market from './market/market'
import { CustomCard } from '../ui/customCard'

const Builder: FC = () => {
    const { t } = useTranslation()
    const { teamStateManager } = useDataContext()
    const { teamValue, formation, changeFormation } = teamStateManager

    return (
        <CustomCard alignItems={'center'} fixedSize={'100vh'}>
            <Typography mb={2} variant="h3">
                {`${t('builder.teamValue').toUpperCase()}: ${t('common.money')}${formatNumber(teamValue)}`}
            </Typography>
            <FormationSelector
                changeFormation={changeFormation}
                formationSelected={formation}
                mb={2}
            />
            <Box position={'relative'}>
                <img
                    alt={t('images.pitch')}
                    src={pitch}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
                <Team />
            </Box>
            <Market />
            <FormationAdjustment />
        </CustomCard>
    )
}

export default Builder
