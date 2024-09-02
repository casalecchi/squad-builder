import { Stack } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

const ContentContainer: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Stack alignItems={'center'} p={{ xs: 0, md: 1 }}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                sx={{ padding: 1, maxWidth: '1280px', width: '100%' }}
            >
                {children}
            </Stack>
        </Stack>
    )
}

export default ContentContainer
