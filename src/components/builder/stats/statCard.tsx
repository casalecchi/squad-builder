import { Stack, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { StatGauge } from './statGauge'
import { CustomPaper } from '../../ui/customPaper'
import { CardDetail, PlayerStatValue, StatMetric } from '../../../models'
import { useDataContext } from '../../../contexts/DataContext'
import { getAttributeFromStats, getConvertedPlayerStatValue } from '../../../utils'
import { SelectStatMetric } from './selectStatMetric'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../../../@types/i18n'
import { PlayersDetail } from './playersDetail'

interface StatCardProps {
    detail: CardDetail
    defaultType?: StatMetric
    typesToDisplay?: StatMetric[]
}

export const StatCard: FC<StatCardProps> = ({
    detail,
    defaultType = 'game',
    typesToDisplay = ['total', 'game', '90min'],
}) => {
    const { t } = useTranslation()
    const { teamStateManager } = useDataContext()
    const { stats } = teamStateManager
    const [selectedStatMetric, setSelectedStatMetric] = useState<StatMetric>(defaultType)
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
        setTotal(valuesWithMetric.reduce((acc, curr) => acc + curr.statValue, 0))
    }, [stats, selectedStatMetric])

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
                        negative={detail.negative}
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
