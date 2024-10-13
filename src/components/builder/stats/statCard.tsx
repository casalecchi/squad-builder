import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { StatGauge } from './statGauge'
import { CustomPaper } from '../../ui/customPaper'
import { PlayerStats, StatType } from '../../../models'
import { useDataContext } from '../../../contexts/DataContext'
import { getAbsoluteStat } from '../../../utils'
import { SelectStatType } from './selectStatType'
import { ExpandMore } from '@mui/icons-material'
import { AccordionCell } from './accordionCell'

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
        <CustomPaper sx={{ p: 1 }}>
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
                                player={teamStateManager.team.midfielders[0]}
                                statUnit="goals"
                                statValue={10}
                                width={'100%'}
                            />
                        </AccordionSummary>
                        <AccordionDetails>
                            <AccordionCell
                                player={teamStateManager.team.midfielders[0]}
                                statUnit="goals"
                                statValue={10}
                            />
                            <AccordionCell
                                player={teamStateManager.team.midfielders[0]}
                                statUnit="goals"
                                statValue={10}
                            />
                            <AccordionCell
                                player={teamStateManager.team.midfielders[0]}
                                statUnit="goals"
                                statValue={10}
                            />
                            <AccordionCell
                                player={teamStateManager.team.midfielders[0]}
                                statUnit="goals"
                                statValue={10}
                            />
                            <AccordionCell
                                player={teamStateManager.team.midfielders[0]}
                                statUnit="goals"
                                statValue={10}
                            />
                            <AccordionCell
                                player={teamStateManager.team.midfielders[0]}
                                statUnit="goals"
                                statValue={10}
                            />
                            <AccordionCell
                                player={teamStateManager.team.midfielders[0]}
                                statUnit="goals"
                                statValue={10}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </Stack>
        </CustomPaper>
    )
}
