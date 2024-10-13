import { Stack, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { StatGauge } from './statGauge'
import { CustomPaper } from '../../ui/customPaper'
import { PlayerStats, StatType } from '../../../models'
import { useDataContext } from '../../../contexts/DataContext'
import { getAbsoluteStat } from '../../../utils'
import { SelectStatType } from './selectStatType'

interface StatCardProps {
    attribute: keyof PlayerStats
    defaultType?: StatType
    typesToDisplay?: StatType[]
}

export const StatCard: FC<StatCardProps> = ({
    attribute,
    defaultType = 'game',
    typesToDisplay = ['total', 'game', '90min'],
}) => {
    const { teamStateManager } = useDataContext()
    const { stats } = teamStateManager
    const [selectedStatType, setSelectedStatType] = useState<StatType>(defaultType)
    const value = getAbsoluteStat(attribute, stats)

    return (
        <CustomPaper sx={{ p: 1, pb: 2 }}>
            <Stack width={'100%'}>
                <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
                    <Typography ml={0.5}>{attribute}</Typography>
                    <SelectStatType
                        selectedStatType={selectedStatType}
                        setSelectedStatType={setSelectedStatType}
                        typesToDisplay={typesToDisplay}
                    />
                </Stack>
                <Stack alignItems={'center'} justifyContent={'center'}>
                    <StatGauge value={value} />
                    <Typography>{`${attribute} per 90 min`}</Typography>
                </Stack>
            </Stack>
        </CustomPaper>
    )
}
