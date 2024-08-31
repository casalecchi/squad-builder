import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import pitch from '../assets/campinho.svg'
import { useTranslation } from 'react-i18next'
import FormationSelector from './formationSelector'
import colors from '../styles/colors.module.scss'
import { Add } from '@mui/icons-material'

const Builder: FC = () => {
    const { t } = useTranslation()

    return (
        <Stack alignItems={'center'} p={{ xs: 0, md: 1 }}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                sx={{ padding: 1, maxWidth: '1280px', width: '100%' }}
            >
                <Stack alignItems={'center'}>
                    <Typography mb={2} variant="h3">
                        {t('builder.lineup')}
                    </Typography>
                    <FormationSelector mb={2} />
                    <Box height={'85vh'} position={'relative'}>
                        <img alt={t('images.pitch')} height={'100%'} src={pitch} />
                        <IconButton
                            sx={{
                                backgroundColor: colors.purple,
                                position: 'absolute',
                                bottom: `10%`,
                                left: `50%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Add color={'secondary'} />
                        </IconButton>
                        <IconButton
                            sx={{
                                backgroundColor: colors.purple,
                                position: 'absolute',
                                bottom: `35%`,
                                left: `20%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Add color={'secondary'} />
                        </IconButton>
                        <IconButton
                            sx={{
                                backgroundColor: colors.purple,
                                position: 'absolute',
                                bottom: `30%`,
                                left: `40%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Add color={'secondary'} />
                        </IconButton>
                        <IconButton
                            sx={{
                                backgroundColor: colors.purple,
                                position: 'absolute',
                                bottom: `30%`,
                                left: `60%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Add color={'secondary'} />
                        </IconButton>
                        <IconButton
                            sx={{
                                backgroundColor: colors.purple,
                                position: 'absolute',
                                bottom: `35%`,
                                left: `80%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Add color={'secondary'} />
                        </IconButton>
                        <IconButton
                            sx={{
                                backgroundColor: colors.purple,
                                position: 'absolute',
                                bottom: `50%`,
                                left: `37%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Add color={'secondary'} />
                        </IconButton>
                        <IconButton
                            sx={{
                                backgroundColor: colors.purple,
                                position: 'absolute',
                                bottom: `50%`,
                                left: `63%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Add color={'secondary'} />
                        </IconButton>
                        <IconButton
                            sx={{
                                backgroundColor: colors.purple,
                                position: 'absolute',
                                bottom: `63%`,
                                left: `50%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Add color={'secondary'} />
                        </IconButton>
                        <IconButton
                            sx={{
                                backgroundColor: colors.purple,
                                position: 'absolute',
                                bottom: `80%`,
                                left: `50%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Add color={'secondary'} />
                        </IconButton>
                        <IconButton
                            sx={{
                                backgroundColor: colors.purple,
                                position: 'absolute',
                                bottom: `75%`,
                                left: `75%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Add color={'secondary'} />
                        </IconButton>
                        <IconButton
                            sx={{
                                backgroundColor: colors.purple,
                                position: 'absolute',
                                bottom: `75%`,
                                left: `25%`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Add color={'secondary'} />
                        </IconButton>
                    </Box>
                </Stack>
                <Divider flexItem orientation={'vertical'} sx={{ color: 'purple' }} />
                <Typography>{'Testeeeeee'}</Typography>
            </Stack>
        </Stack>
    )
}

export default Builder
