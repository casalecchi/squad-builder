import { Card, CardMedia, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import colors from '../../styles/colors.module.scss'

interface InstructionCardProps {
    image?: string
    text?: string
}

export const InstructionCard: FC<InstructionCardProps> = ({ image, text }) => {
    return (
        <Card
            sx={{
                boxShadow: '5px 5px 10px green',
                backgroundColor: 'primary.main',
                width: '15rem',
                height: '18rem',
            }}
        >
            <Stack
                alignItems={'center'}
                height={'100%'}
                justifyContent={'center'}
                p={2}
                textAlign={'center'}
            >
                <CardMedia
                    component={'img'}
                    image={image}
                    sx={{ width: '100%', mb: 2 }}
                    title="green iguana"
                />
                <Typography color={colors.pureBlack}>{text}</Typography>
            </Stack>
        </Card>
    )
}
