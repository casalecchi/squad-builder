import { Stack, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../../../@types/i18n'
import { useDataContext } from '../../../contexts/DataContext'
import { CardDetail, CardTabColumn, PlayerStatValue, StatMetric } from '../../../models'
import { getAttributeFromStats, getConvertedPlayerStatValue } from '../../../utils'
import { CustomPaper } from '../../ui/customPaper'
import { PlayersDetail } from './playersDetail'
import { SelectStatMetric } from './selectStatMetric'
import { StatGauge } from './statGauge'

interface StatCardProps {
    detail: CardDetail
}

export const StatCard: FC<StatCardProps> = ({ detail }) => {
    const { t } = useTranslation()
    const { teamStateManager, defaultMetric, isPercentageTab } = useDataContext()
    const { stats } = teamStateManager
    const [selectedStatMetric, setSelectedStatMetric] = useState<StatMetric>(defaultMetric)
    const [typesToDisplay, setTypesToDisplay] = useState<StatMetric[]>(
        isPercentageTab ? ['mean'] : ['game', '90min', 'total']
    )
    const [orderedByStat, setOrderedByStat] = useState<PlayerStatValue[]>([])
    const [total, setTotal] = useState<number>()

    useEffect(() => {
        const filteredStats = stats.filter(
            (ps) => !detail.positionsNotAllowed.includes(ps.player.position)
        )
        const statValues = getAttributeFromStats(filteredStats, detail.attributes)
        const valuesWithMetric = statValues.map((ps) =>
            getConvertedPlayerStatValue(ps, stats, selectedStatMetric)
        )
        setOrderedByStat(valuesWithMetric.toSorted((a, b) => b.statValue - a.statValue))
        const sum = valuesWithMetric.reduce((acc, curr) => acc + curr.statValue, 0)
        setTotal(selectedStatMetric == 'mean' ? sum / valuesWithMetric.length : sum)
    }, [stats, selectedStatMetric])

    useEffect(() => {
        setSelectedStatMetric(defaultMetric)
    }, [defaultMetric])

    useEffect(() => {
        setTypesToDisplay(isPercentageTab ? ['mean'] : ['game', '90min', 'total'])
    }, [isPercentageTab])

    return (
        <CustomPaper sx={{ p: 1 }}>
            <Stack width={'100%'}>
                <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
                    <Typography ml={0.5}>{t(`cards.${detail.title}` as TranslationKey)}</Typography>
                    <SelectStatMetric
                        selectedStatMetric={selectedStatMetric}
                        setSelectedStatMetric={setSelectedStatMetric}
                        typesToDisplay={typesToDisplay}
                    />
                </Stack>
                <Stack alignItems={'center'} justifyContent={'center'}>
                    <StatGauge
                        maxValue={detail.interval.max}
                        negative={detail.column == CardTabColumn.negative}
                        value={total ?? -1}
                    />
                    <Typography>
                        {`${t(`unit.${detail.unit}`)} ${t(`statMetric.${selectedStatMetric}`)}`.toUpperCase()}
                    </Typography>
                    <PlayersDetail playerStatValues={orderedByStat} />
                </Stack>
            </Stack>
        </CustomPaper>
    )
}
