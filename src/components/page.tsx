import { FC } from 'react'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import Header from './header'
import Footer from './footer'
import Builder from './builder'
import ContentContainer from './ui/contentContainer'
import { useTeamStateManager } from '../hooks/useTeamStateManager'

const Page: FC = () => {
    const { players } = useTeamStateManager()

    return (
        <Stack display={'flex'}>
            <Header />
            <ContentContainer>
                <Builder />
                <List>
                    {players.map((player, index) => (
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar alt={player.name} src={player.photo} />
                            </ListItemAvatar>
                            <ListItemText>{player.name}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </ContentContainer>
            <Footer />
        </Stack>
    )
}

export default Page
