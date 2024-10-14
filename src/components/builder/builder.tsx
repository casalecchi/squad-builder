import { Box, Stack } from '@mui/material'
import { FC } from 'react'
import pitch from '../../assets/campinho.svg'
import FormationSelector from './formationSelector'
import Team from './team/team'
import FormationAdjustment from './formationAdjustment'
import Market from './market/market'
import { StatCard } from './stats/statCard'
import { CustomPaper } from '../ui/customPaper'
import { useDeviceContext } from '../../contexts/DeviceContext'
import { statsCards } from '../../constants/card'

const BoxTeam: FC = () => {
    const { mobile } = useDeviceContext()

    return (
        <Box
            sx={{
                aspectRatio: 0.9776,
                position: 'relative',
                width: '100%',
                maxWidth: {
                    md: mobile ? undefined : 'min(72vh, 500px)',
                    lg: `min(80vh, 500px)`,
                    xl: `min(82vh, 1000px)`,
                },
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
    const { mobile } = useDeviceContext()

    return (
        <Stack
            direction={mobile ? 'column' : 'row'}
            height={mobile ? undefined : '100vh'}
            p={2}
            spacing={2}
        >
            <Stack flex={mobile ? undefined : 6}>
                <CustomPaper sx={{ height: mobile ? undefined : '100%', px: 0, flex: 0 }}>
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
            <Stack flex={mobile ? undefined : 3}>
                <Stack spacing={2}>
                    {statsCards
                        .filter((card) => card.attributes.length == 1 && !card.negative)
                        .map((card) => (
                            <StatCard detail={card} key={card.title} />
                        ))}
                </Stack>
            </Stack>
            <Stack flex={mobile ? undefined : 3}>
                <Stack spacing={2}>
                    {statsCards
                        .filter((card) => card.attributes.length == 1 && card.negative)
                        .map((card) => (
                            <StatCard detail={card} key={card.title} />
                        ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Builder
