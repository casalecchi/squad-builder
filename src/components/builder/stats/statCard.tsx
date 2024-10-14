import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { StatGauge } from './statGauge'
import { CustomPaper } from '../../ui/customPaper'
import { PlayerStats, PlayerWithStats, StatMetric } from '../../../models'
import { useDataContext } from '../../../contexts/DataContext'
import { getStatValue, transformValueToMetric } from '../../../utils'
import { SelectStatMetric } from './selectStatMetric'
import { ExpandMore } from '@mui/icons-material'
import { AccordionCell } from './accordionCell'
import { useTranslation } from 'react-i18next'

interface StatCardProps {
    attribute: keyof PlayerStats
    defaultType?: StatMetric
    typesToDisplay?: StatMetric[]
}

export const StatCard: FC<StatCardProps> = ({
    attribute,
    defaultType = 'game',
    typesToDisplay = ['total', 'game', '90min'],
}) => {
    const { t } = useTranslation()
    const { teamStateManager } = useDataContext()
    const { stats } = teamStateManager
    const [selectedStatMetric, setSelectedStatMetric] = useState<StatMetric>(defaultType)
    const [orderedByStat, setOrderedByStat] = useState<PlayerWithStats[]>([])
    const value = getStatValue(attribute, stats, selectedStatMetric)

    useEffect(() => {
        setOrderedByStat(
            stats.toSorted(
                (a, b) =>
                    transformValueToMetric(attribute, b.stats, selectedStatMetric) -
                    transformValueToMetric(attribute, a.stats, selectedStatMetric)
            )
        )
    }, [stats])

    return (
        <CustomPaper sx={{ p: 1 }}>
            <Stack width={'100%'}>
                <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
                    <Typography ml={0.5}>{attribute.toUpperCase()}</Typography>
                    <SelectStatMetric
                        selectedStatMetric={selectedStatMetric}
                        setSelectedStatMetric={setSelectedStatMetric}
                        typesToDisplay={typesToDisplay}
                    />
                </Stack>
                <Stack alignItems={'center'} justifyContent={'center'}>
                    <StatGauge value={value} />
                    <Typography>
                        {`${attribute} ${t(`statMetric.${selectedStatMetric}`)}`.toUpperCase()}
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
