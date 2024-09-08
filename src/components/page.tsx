import { FC } from 'react'
import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
} from '@mui/material'
import Header from './header'
import Footer from './footer'
import Builder from './builder'
import ContentContainer from './ui/contentContainer'
import { useTeamStateManager } from '../hooks/useTeamStateManager'
import colors from '../styles/colors.module.scss'

const Page: FC = () => {
    const { players } = useTeamStateManager()
    console.log(players.length)

    return (
        <Stack display={'flex'}>
            <Header />
            <ContentContainer>
                <Builder />
                <Box flex={1}>
                    <List sx={{ backgroundColor: colors.snow }}>
                        {players.slice(0, 10).map((player, index) => (
                            <>
                                <ListItem key={index}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={player.name}
                                            src={player.photo}
                                            sx={{ border: `3px solid ${colors.darkCyan}` }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText sx={{ color: colors.primary, fontWeight: 600 }}>
                                        {player.positionId}
                                    </ListItemText>
                                    <ListItemText sx={{ color: colors.primary, fontWeight: 600 }}>
                                        {player.name}
                                    </ListItemText>
                                    <ListItemAvatar sx={{ color: colors.primary, fontWeight: 600 }}>
                                        {player.name}
                                    </ListItemAvatar>
                                </ListItem>
                                {index != 9 && (
                                    <Divider
                                        flexItem
                                        sx={{ backgroundColor: 'black' }}
                                        variant={'middle'}
                                    />
                                )}
                            </>
                        ))}
                    </List>
                </Box>
            </ContentContainer>
            <Footer />
        </Stack>
    )
}

export default Page
