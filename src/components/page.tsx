import { FC, useEffect, useState } from 'react'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import Header from './header'
import Footer from './footer'
import Builder from './builder'
import ContentContainer from './ui/contentContainer'
import useFetchCartola from '../hooks/useFetchCartola'

const Page: FC = () => {
    const { players, fetchData } = useFetchCartola()

    const [images, setImages] = useState<{ [key: number]: string }>({})

    // useEffect(() => {
    //     const fetchImages = async () => {
    //         const imagesMap: { [key: number]: string } = {}

    //         for (const player of players) {
    //             try {
    //                 const response = await fetch(player.photo, { mode: 'no-cors' })
    //                 const blob = await response.blob()
    //                 const imageUrl = URL.createObjectURL(blob)
    //                 imagesMap[player.id] = imageUrl
    //             } catch (error) {
    //                 console.error('Erro ao carregar imagem:', error)
    //             }
    //         }

    //         console.log(imagesMap, 'AQUI')
    //         setImages(imagesMap)
    //     }

    //     fetchImages().then()
    // }, [players])

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Stack display={'flex'}>
            <Header />
            <ContentContainer>
                <Builder />
                <List>
                    {players.slice(0, 1).map((player, index) => (
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar alt={player.name} src={images[player.id]} />
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
