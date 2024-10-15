import { Box, Stack } from '@mui/material'
import { FC } from 'react'
import { CustomPaper } from '../../ui/customPaper'
import FormationAdjustment from '../formationAdjustment'
import FormationSelector from '../formationSelector'
import Market from '../market/market'
import { useDeviceContext } from '../../../contexts/DeviceContext'
import Team from './team'
import pitch from '../../../assets/campinho.svg'

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

export const SquadCard: FC = () => {
    const { mobile } = useDeviceContext()

    return (
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
    )
}
