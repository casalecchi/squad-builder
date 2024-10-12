import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { StatGauge } from './statGauge'
import { CustomPaper } from '../../ui/customPaper'

export const StatCard: FC = () => {
    return (
        <CustomPaper>
            <Stack alignItems={'center'} justifyContent={'center'}>
                <StatGauge value={99} />
                <Typography>{'88% de passes certos'}</Typography>
            </Stack>
        </CustomPaper>
    )
}
