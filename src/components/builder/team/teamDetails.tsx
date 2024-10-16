import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDataContext } from '../../../contexts/DataContext'
import { formatNumber } from '../../../utils'
import { CustomPaper } from '../../ui/customPaper'

export const TeamDetails: FC = () => {
    const { t } = useTranslation()
    const { teamStateManager } = useDataContext()

    return (
        <CustomPaper sx={{ flex: 0 }}>
            <Stack alignItems={'center'}>
                <Typography>{t('builder.teamValue')}</Typography>
                <Typography>{`${t('common.money')}${formatNumber(teamStateManager.teamValue)}`}</Typography>
            </Stack>
        </CustomPaper>
    )
}
