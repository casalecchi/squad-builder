import { FC } from 'react'
import { Stack, useMediaQuery } from '@mui/material'
import Header from './header'
import Footer from './footer'
import Builder from './builder'
import ContentContainer from './ui/contentContainer'

const Page: FC = () => {
    const mobile = useMediaQuery('(max-width:600px)', { noSsr: true })

    return (
        <Stack display={'flex'}>
            {!mobile && <Header />}
            <ContentContainer>
                <Builder />
            </ContentContainer>
            <Footer />
        </Stack>
    )
}

export default Page
