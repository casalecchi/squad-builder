import { FC } from 'react'
import { Stack } from '@mui/material'
import Cover from './cover'
import HowItWorks from './howItWorks'

const Page: FC = () => {
    return (
        <Stack display={'flex'}>
            <Cover />
            <HowItWorks />
        </Stack>
    )
}

export default Page
