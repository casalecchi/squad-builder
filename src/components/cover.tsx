import { FC } from 'react'
import colors from '../styles/colors.module.scss'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'

const Cover: FC = () => {
    const mobile = useMediaQuery('(max-width:600px)', { noSsr: true })

    return (
        <Box
            alignItems={mobile ? 'end' : 'center'}
            display={'flex'}
            height={'100vh'}
            justifyContent={'space-evenly'}
            px={2}
            py={3}
            sx={{ background: colors.pageDarkBackground }}
        >
            <Stack alignItems={'baseline'} direction={'row'}>
                <Stack>
                    <Typography
                        color={'primary'}
                        fontSize={mobile ? '3rem' : '4rem'}
                        fontWeight={500}
                        lineHeight={1}
                    >
                        {'Cartola Insights'}
                    </Typography>
                    <Typography
                        color={'primary'}
                        fontSize={mobile ? '1rem' : '2rem'}
                        fontWeight={100}
                        lineHeight={1}
                        mt={1}
                    >
                        {'Tool to build your team with data analytics'}
                    </Typography>
                    <Stack
                        direction={'row'}
                        justifyContent={mobile ? 'center' : undefined}
                        mt={3}
                        spacing={2}
                    >
                        <Button
                            color={'primary'}
                            variant={'outlined'}
                            sx={{
                                borderWidth: 3,
                                borderRadius: 10,
                                textTransform: 'none',
                                maxWidth: '150px',
                                flex: 1,
                            }}
                        >
                            {'Try it'}
                        </Button>
                        <Button
                            variant={'outlined'}
                            sx={{
                                color: colors.pureBlack,
                                background: colors.primary,
                                borderWidth: 3,
                                borderRadius: 10,
                                textTransform: 'none',
                                maxWidth: '150px',
                                flex: 1,
                            }}
                        >
                            {'How it works'}
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Cover
