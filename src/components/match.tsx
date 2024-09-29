import { Avatar, Stack, Typography } from '@mui/material'
import { FC } from 'react'

interface MatchProps {
    homeUrl: string
    awayUrl: string
}

const Match: FC<MatchProps> = ({ homeUrl, awayUrl }) => {
    return (
        <Stack alignItems={'center'} direction={'row'} spacing={1}>
            <Avatar src={homeUrl} variant={'square'} />
            <Typography>{'X'}</Typography>
            <Avatar src={awayUrl} variant={'square'} />
        </Stack>
    )
}

export default Match
