import { Box, Stack, useMediaQuery } from '@mui/material'
import { FC } from 'react'
import pitch from '../../assets/campinho.svg'
import FormationSelector from './formationSelector'
import Team from './team/team'
import FormationAdjustment from './formationAdjustment'
import Market from './market/market'
import { StatCard } from './stats/statCard'
import { CustomPaper } from '../ui/customPaper'

const BoxTeam: FC = () => {
    return (
        <Box
            sx={{
                aspectRatio: 0.9776,
                position: 'relative',
                width: '100%',
                maxWidth: 800,
                backgroundImage: `url(${pitch})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Team />
        </Box>
    )
}

const Builder: FC = () => {
    const mobile = useMediaQuery('(max-width:600px)', { noSsr: true })

    return (
        <Stack
            direction={mobile ? 'column' : 'row'}
            height={mobile ? undefined : '100vh'}
            p={2}
            spacing={2}
        >
            <Stack flex={mobile ? undefined : 5} height={mobile ? 500 : undefined}>
                <CustomPaper sx={{ height: '100%', px: 0 }}>
                    <Stack
                        alignItems={'center'}
                        height={'100%'}
                        spacing={2}
                        width={mobile ? '100%' : '90%'}
                    >
                        <FormationSelector />
                        <BoxTeam />
                        <Market />
                        <FormationAdjustment />
                    </Stack>
                </CustomPaper>
            </Stack>
            <Stack>
                <Stack spacing={2}>
                    <StatCard />
                    <StatCard />
                </Stack>
            </Stack>
            <Stack>
                <Stack spacing={2}>
                    <StatCard />
                    <StatCard />
                </Stack>
            </Stack>
            <Stack>
                <Stack spacing={2}>
                    <StatCard />
                    <StatCard />
                </Stack>
            </Stack>
            <Stack>
                <Stack spacing={2}>
                    <StatCard />
                    <StatCard />
                </Stack>
            </Stack>
            <Stack>
                <Stack spacing={2}>
                    <StatCard />
                    <StatCard />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Builder
