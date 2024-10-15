import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { FC } from 'react'
import { AccordionCell } from './accordionCell'
import { PlayerStatValue } from '../../../models'

interface PlayersDetailProps {
    playerStatValues: PlayerStatValue[]
}

export const PlayersDetail: FC<PlayersDetailProps> = ({ playerStatValues }) => {
    const otherPlayers = playerStatValues.slice(1).filter((ps) => ps.statValue > 0)
    const showMore = otherPlayers.length > 0

    return (
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
                expandIcon={showMore ? <ExpandMore sx={{ opacity: 0.4 }} /> : undefined}
            >
                <AccordionCell
                    isHeader
                    player={playerStatValues[0]?.player}
                    showMore={showMore}
                    statValue={playerStatValues[0]?.statValue}
                    width={'100%'}
                />
            </AccordionSummary>
            {showMore && (
                <AccordionDetails>
                    {otherPlayers.map((ps) => (
                        <AccordionCell
                            key={ps.player.id}
                            player={ps.player}
                            statValue={ps.statValue}
                        />
                    ))}
                </AccordionDetails>
            )}
        </Accordion>
    )
}
