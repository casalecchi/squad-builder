import { Avatar, Stack, StackProps, Typography } from '@mui/material'
import { FC } from 'react'
import { Player } from '../../../models'

interface AccordionCellProps extends StackProps {
    player?: Player
    statValue?: number | string
    statUnit?: string
    isHeader?: boolean
}

export const AccordionCell: FC<AccordionCellProps> = ({
    player,
    statValue,
    statUnit,
    isHeader,
    ...props
}) => {
    return (
        <Stack
            alignItems={'center'}
            direction={'row'}
            justifyContent={'space-between'}
            py={isHeader ? undefined : 0.5}
            {...props}
        >
            <Stack alignItems={'center'} direction={'row'} spacing={1}>
                <Avatar
                    alt={player?.name}
                    src={player?.photo}
                    sx={{ height: '2rem', width: '2rem' }}
                />
                <Typography>{`${player?.name ?? 'Jogador'}`}</Typography>
            </Stack>
            <Stack alignItems={'center'} direction={'row'} spacing={3}>
                <Typography>{`${statValue ?? '-'} ${statUnit ?? ''}`}</Typography>
                {isHeader && (
                    <Typography fontSize={'0.7rem'} sx={{ opacity: 0.4 }}>
                        {'See playes stats'}
                    </Typography>
                )}
            </Stack>
        </Stack>
    )
}
