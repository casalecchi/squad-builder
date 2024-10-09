import { FC } from 'react'
import { Stack } from '@mui/material'
import Builder from './builder/builder'
import ContentContainer from './ui/contentContainer'
import Cover from './cover'

const Page: FC = () => {
    return (
        <Stack display={'flex'}>
            <Cover />
            <ContentContainer>
                <Builder />
            </ContentContainer>
        </Stack>
    )
}

export default Page
