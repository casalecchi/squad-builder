import { Link, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import LanguageSwitch from './languageSwitch'
import aceLogo from '../assets/ace.jpg'

const Header: FC = () => {
    return (
        <Stack
            alignItems={'center'}
            direction={'row'}
            justifyContent={'space-between'}
            px={10}
            py={2}
            sx={{ backgroundColor: 'primary.dark' }}
        >
            <Stack direction={'row'} spacing={5}>
                <Link
                    href={'https://ac3lab.github.io'}
                    rel={'noopener noreferrer'}
                    target={'_blank'}
                >
                    <img
                        alt={'ACE Laboratory'}
                        className={'imgCropper'}
                        height={55}
                        src={aceLogo}
                    />
                </Link>
                <Typography variant="h3">{'Squad Builder'}</Typography>
            </Stack>
            <LanguageSwitch />
        </Stack>
    )
}

export default Header
