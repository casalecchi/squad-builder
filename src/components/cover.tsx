import { FC } from 'react'
import colors from '../styles/colors.module.scss'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDeviceContext } from '../contexts/DeviceContext'
import { useTranslation } from 'react-i18next'

const Cover: FC = () => {
    const { t } = useTranslation()
    const { mobile } = useDeviceContext()

    const scrollToDetail = () => {
        const element = document.getElementById('howItWorks')
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Box
            alignItems={mobile ? 'end' : 'center'}
            display={'flex'}
            height={'100dvh'}
            justifyContent={'space-evenly'}
            px={2}
            py={3}
            sx={{
                backgroundImage: 'url(/background.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Stack alignItems={'baseline'} direction={'row'}>
                <Stack>
                    <Typography
                        color={'primary'}
                        fontSize={mobile ? '3rem' : '4rem'}
                        fontWeight={500}
                        lineHeight={1}
                    >
                        {t('app.title')}
                    </Typography>
                    <Typography
                        color={'primary'}
                        fontSize={mobile ? '1rem' : '2rem'}
                        fontWeight={100}
                        lineHeight={1}
                        mt={1}
                    >
                        {t('app.description')}
                    </Typography>
                    <Stack
                        direction={'row'}
                        justifyContent={mobile ? 'center' : undefined}
                        mt={3}
                        spacing={2}
                    >
                        <Button
                            color={'primary'}
                            component={Link}
                            to={'/app'}
                            variant={'outlined'}
                            sx={{
                                borderWidth: 3,
                                borderRadius: 10,
                                textTransform: 'none',
                                maxWidth: '150px',
                                flex: 1,
                            }}
                        >
                            {t('app.tryIt')}
                        </Button>
                        <Button
                            onClick={scrollToDetail}
                            variant={'outlined'}
                            sx={{
                                color: colors.pureBlack,
                                background: colors.primaryDark,
                                borderWidth: 3,
                                borderRadius: 10,
                                textTransform: 'none',
                                maxWidth: '150px',
                                flex: 1,
                            }}
                        >
                            {t('app.howItWorks')}
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Cover
