import { FC } from 'react'
import { Grid2, Stack } from '@mui/material'
import Header from './header'
import Footer from './footer'
import Builder from './builder'

const Page: FC = () => {
    return (
        <Stack display={'flex'}>
            <Header />
            <Grid2 container>
                <Grid2 size={5}>
                    <Builder />
                </Grid2>
            </Grid2>
            <Footer />
        </Stack>
    )
}

export default Page
