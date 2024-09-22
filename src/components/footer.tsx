import { Language, LinkedIn } from '@mui/icons-material'
import { colors, Divider, Link, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import CustomAvatar from './ui/customAvatar'

const Footer: FC = () => {
    const { t } = useTranslation()

    return (
        <Stack alignItems={'center'} py={3} sx={{ backgroundColor: colors.common['black'] }}>
            <Stack alignItems={'center'} maxWidth={'sm'} spacing={3} width={'100%'}>
                <Stack direction={'row'} justifyContent={'space-evenly'} width={'100%'}>
                    <Link
                        href={'https://www.linkedin.com/company/ac3lab/'}
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                    >
                        <CustomAvatar>
                            <LinkedIn sx={{ color: colors.blue[800] }} />
                        </CustomAvatar>
                    </Link>
                    <Link
                        href={'https://ac3lab.github.io'}
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                    >
                        <CustomAvatar>
                            <Language sx={{ color: colors.common['black'] }} />
                        </CustomAvatar>
                    </Link>
                </Stack>
                <Divider flexItem sx={{ color: 'white' }} />
                <Typography>{`@Copyright. ${t('footer.rights')}`}</Typography>
            </Stack>
        </Stack>
    )
}

export default Footer
