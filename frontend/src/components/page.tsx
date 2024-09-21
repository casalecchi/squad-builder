import { FC } from 'react'
import { Stack } from '@mui/material'
import Header from './header'
import Footer from './footer'
import Builder from './builder'
import ContentContainer from './ui/contentContainer'

const Page: FC = () => {
    return (
        <Stack display={'flex'}>
            <Header />
            <ContentContainer>
                <Builder />
            </ContentContainer>
            <Footer />
        </Stack>
    )
}

export default Page
