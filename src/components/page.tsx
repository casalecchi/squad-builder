import { FC } from 'react'
import { Stack } from '@mui/material'
import Header from './header'
import Footer from './footer'
import Builder from './builder'

const Page: FC = () => {
    return (
        <Stack display={'flex'}>
            <Header />
            <Builder />
            <Footer />
        </Stack>
    )
}

export default Page
