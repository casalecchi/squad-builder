import { Link, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import LanguageSwitch from './languageSwitch'
import aceLogo from '../assets/ace.jpg'

const Header: FC = () => {
    return (
        <Stack alignItems={'center'} sx={{ backgroundColor: 'primary.dark' }}>
            <Stack
                alignItems={'center'}
                direction={'row'}
                justifyContent={'space-between'}
                maxWidth={'1280px'}
                px={10}
                py={1}
                width={'100%'}
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
        </Stack>
    )
}

export default Header
