import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { StatGauge } from './statGauge'
import { CustomPaper } from '../../ui/customPaper'
import { CardDetail, PlayerWithStats, StatMetric } from '../../../models'
import { useDataContext } from '../../../contexts/DataContext'
import { getStatValue, transformValueToMetric } from '../../../utils'
import { SelectStatMetric } from './selectStatMetric'
import { ExpandMore } from '@mui/icons-material'
import { AccordionCell } from './accordionCell'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '../../../@types/i18n'

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
    const [orderedByStat, setOrderedByStat] = useState<PlayerWithStats[]>([])
    const { attributes } = detail
    // TODO - custom attribute
    const attribute = attributes[0]
    const value = getStatValue(attribute, stats, selectedStatMetric)

    useEffect(() => {
        setOrderedByStat(
            stats.toSorted(
                (a, b) =>
                    transformValueToMetric(attribute, b.stats, selectedStatMetric) -
                    transformValueToMetric(attribute, a.stats, selectedStatMetric)
            )
        )
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
                        value={value}
                    />
                    <Typography>
                        {`${t(`unit.${detail.unit}`)} ${t(`statMetric.${selectedStatMetric}`)}`.toUpperCase()}
                    </Typography>
                    <Accordion
                        disableGutters
                        elevation={0}
                        sx={{
                            width: '100%',
                            background: 'transparent',
                            '&:before': {
                                display: 'none',
                            },
                        }}
                    >
                        <AccordionSummary
                            disableTouchRipple
                            expandIcon={<ExpandMore sx={{ opacity: 0.4 }} />}
                        >
                            <AccordionCell
                                isHeader
                                player={orderedByStat[0]?.player}
                                width={'100%'}
                                statValue={transformValueToMetric(
                                    attribute,
                                    orderedByStat[0]?.stats ?? {},
                                    selectedStatMetric
                                )}
                            />
                        </AccordionSummary>
                        <AccordionDetails>
                            {orderedByStat.slice(1).map((ps) => (
                                <AccordionCell
                                    key={ps.player.id}
                                    player={ps.player}
                                    statValue={transformValueToMetric(
                                        attribute,
                                        ps.stats,
                                        selectedStatMetric
                                    )}
                                />
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </Stack>
        </CustomPaper>
    )
}
