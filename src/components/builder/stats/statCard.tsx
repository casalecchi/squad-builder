import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { StatGauge } from './statGauge'
import { CustomPaper } from '../../ui/customPaper'
import { PlayerStats } from '../../../models'
import { useDataContext } from '../../../contexts/DataContext'
import { formatNumber } from '../../../utils'

interface StatCardProps {
    attribute: keyof PlayerStats
}

export const StatCard: FC<StatCardProps> = ({ attribute }) => {
    const { teamStateManager } = useDataContext()
    const values =
        teamStateManager.stats.length == 0
            ? [0]
            : teamStateManager.stats.map((stat) => stat[attribute] as number)
    console.log(values)
    // TODO - refactor
    const sum = values.reduce((acc, currentValue) => acc + currentValue, 0)
    const average = sum / values.length

    return (
        <CustomPaper>
            <Stack alignItems={'center'} justifyContent={'center'}>
                <StatGauge value={formatNumber(average)} />
                <Typography>{`${formatNumber(average)}% of ${attribute}`}</Typography>
            </Stack>
        </CustomPaper>
    )
}
