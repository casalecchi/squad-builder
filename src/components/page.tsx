import { FC } from 'react'
import { Stack } from '@mui/material'
import Header from './header'
import Footer from './footer'

const Page: FC = () => {
    return (
        <Stack display={'flex'}>
            <Header />
            <Footer />
        </Stack>
    )
}

export default Page
