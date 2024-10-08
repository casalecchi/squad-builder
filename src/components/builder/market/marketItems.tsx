import { Avatar, ListItemAvatar, Stack, Typography } from '@mui/material'
import { FC } from 'react'

interface MarketAvatarProps {
    alt: string
    src: string
}

export const MarketAvatar: FC<MarketAvatarProps> = ({ alt, src }) => {
    return (
        <ListItemAvatar sx={{ height: '4rem', width: '4rem' }}>
            <Avatar alt={alt} src={src} sx={{ height: '100%', width: '100%' }} variant="square" />
        </ListItemAvatar>
    )
}

interface MatchProps {
    homeUrl: string
    awayUrl: string
}

export const Match: FC<MatchProps> = ({ homeUrl, awayUrl }) => {
    return (
        <Stack alignItems={'center'} direction={'row'} spacing={1}>
            <Avatar src={homeUrl} variant={'square'} />
            <Typography>{'X'}</Typography>
            <Avatar src={awayUrl} variant={'square'} />
        </Stack>
    )
}
