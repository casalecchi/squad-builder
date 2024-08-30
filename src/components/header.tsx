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
            <Stack alignItems={'center'} direction={'row'} gap={3}>
                <Link
                    height={'3rem'}
                    href={'https://ac3lab.github.io'}
                    rel={'noopener noreferrer'}
                    target={'_blank'}
                >
                    <img
                        alt={'ACE Laboratory'}
                        className={'imgCropper'}
                        height={'100%'}
                        src={aceLogo}
                    />
                </Link>
                <Typography fontSize={'2rem'}>{'Squad Builder'}</Typography>
            </Stack>
            <LanguageSwitch />
        </Stack>
    )
}

export default Header
