import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import LanguageSwitch from './languageSwitch'
import aceLogo from '../assets/ace.jpg'

const Header: FC = () => {
    return (
        <Stack
            alignItems={'center'}
            direction={'row'}
            justifyContent={'space-between'}
            p={2}
            sx={{ backgroundColor: 'primary.light' }}
        >
            <Stack direction={'row'} spacing={2}>
                <a href="https://ac3lab.github.io" rel="noreferrer" target="_blank">
                    <img
                        alt={'ACE Laboratory'}
                        className={'imgCropper'}
                        height={55}
                        src={aceLogo}
                    />
                </a>
                <Typography variant="h3">{'Squad Builder'}</Typography>
            </Stack>
            <LanguageSwitch />
        </Stack>
    )
}

export default Header
