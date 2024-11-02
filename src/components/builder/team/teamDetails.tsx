import { InfoOutlined } from '@mui/icons-material'
import { Button, Stack, Tooltip, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDataContext } from '../../../contexts/DataContext'
import { useDeviceContext } from '../../../contexts/DeviceContext'
import colors from '../../../styles/colors.module.scss'
import { formatNumber } from '../../../utils'
import { CustomPaper } from '../../ui/customPaper'
import { SelectDefaultMetric } from '../stats/defaultSelect'

export const TeamDetails: FC = () => {
    const { t } = useTranslation()
    const { mobile } = useDeviceContext()
    const { teamStateManager } = useDataContext()

    const value = formatNumber(teamStateManager.teamValue)
    const average = formatNumber(teamStateManager.teamAverage)

    const TeamValue = (
        <Stack alignItems={'center'} alignSelf={'center'}>
            <Typography>{t('builder.teamValue').toUpperCase()}</Typography>
            <Typography
                sx={{
                    color: value > 120 ? colors.gold : 'white',
                    textShadow: '0px 2px 2px black',
                }}
            >{`${t('common.money')}${value}`}</Typography>
        </Stack>
    )

    const TeamAverage = (
        <Stack alignItems={'center'} alignSelf={'center'}>
            <Typography>{t('builder.teamAverage').toUpperCase()}</Typography>
            <Typography
                sx={{
                    color: average > 60 ? colors.gold : 'white',
                    textShadow: '0px 2px 2px black',
                }}
            >
                {average}
            </Typography>
        </Stack>
    )

    const OptimizeButton = (
        <Button variant="outlined">
            <Typography mr={0.5}>{t('common.optimize').toUpperCase()}</Typography>
            <Tooltip title={t('model.description')}>
                <InfoOutlined sx={{ fontSize: '1.1rem' }} />
            </Tooltip>
        </Button>
    )

    return (
        <CustomPaper sx={{ flex: 0, px: 3 }}>
            {mobile ? (
                <Stack spacing={2} width={'100%'}>
                    <Stack direction={'row'} justifyContent={'space-evenly'}>
                        {TeamValue}
                        {TeamAverage}
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-evenly'}>
                        <SelectDefaultMetric />
                        {OptimizeButton}
                    </Stack>
                </Stack>
            ) : (
                <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
                    <SelectDefaultMetric />
                    {TeamValue}
                    {TeamAverage}
                    {OptimizeButton}
                </Stack>
            )}
        </CustomPaper>
    )
}
