import { Home } from '@mui/icons-material'
import { Stack, IconButton } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import SettingsMenu from '../settingsMenu'
import { CustomPaper } from './customPaper'

export const OptionsCard: FC = () => {
    return (
        <CustomPaper sx={{ p: 0 }}>
            <Stack
                alignItems={'center'}
                direction={'row'}
                justifyContent={'space-between'}
                px={2}
                width={'100%'}
            >
                <IconButton color={'primary'} component={Link} to={'/'}>
                    <Home />
                </IconButton>
                <SettingsMenu noBackground />
            </Stack>
        </CustomPaper>
    )
}
