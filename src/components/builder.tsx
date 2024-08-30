import { Box, Card, Typography } from '@mui/material'
import { FC } from 'react'
import colors from '../styles/colors.module.scss'

const Builder: FC = () => {
    return (
        <Card sx={{ padding: 1 }} variant={'outlined'}>
            <Box height={'28.5rem'} sx={{ backgroundColor: colors.green }}>
                <Typography color="primary">
                    {'Aqui será o campo para a montagem do elenco'}
                </Typography>
            </Box>
        </Card>
    )
}

export default Builder
