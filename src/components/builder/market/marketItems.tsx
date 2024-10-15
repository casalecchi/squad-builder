import { Avatar, ListItemAvatar, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { useDeviceContext } from '../../../contexts/DeviceContext'

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
    const { mobile } = useDeviceContext()
    const badgeSize = mobile ? 27 : 40

    return (
        <Stack alignItems={'center'} direction={'row'} height={badgeSize} spacing={1}>
            <Avatar src={homeUrl} sx={{ height: badgeSize, width: badgeSize }} variant={'square'} />
            <Typography>{'X'}</Typography>
            <Avatar src={awayUrl} sx={{ height: badgeSize, width: badgeSize }} variant={'square'} />
        </Stack>
    )
}
