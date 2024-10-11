import { Box, Paper, Grid2, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import pitch from '../../assets/campinho.svg'
import FormationSelector from './formationSelector'
import Team from './team/team'
import { useDataContext } from '../../contexts/DataContext'
import FormationAdjustment from './formationAdjustment'
import Market from './market/market'

const Builder: FC = () => {
    const { teamStateManager } = useDataContext()
    const { formation, changeFormation } = teamStateManager

    return (
        <Grid2 container height={'100vh'} p={2} spacing={2}>
            <Grid2 height={'100%'} size={5}>
                <Paper
                    sx={{ justifyContent: 'center', display: 'flex', flex: 1, height: '100%' }}
                    variant={'outlined'}
                >
                    <Stack alignItems={'center'} height={'100%'} py={2} spacing={2} width={'90%'}>
                        <FormationSelector
                            changeFormation={changeFormation}
                            formationSelected={formation}
                        />
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                maxWidth: 800,
                                maxHeight: 800,
                                backgroundImage: `url(${pitch})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <Team />
                        </Box>
                        <Market />
                        <FormationAdjustment />
                    </Stack>
                </Paper>
            </Grid2>
            <Grid2 size={7}>
                <Stack height={'100%'} spacing={2}>
                    <Paper sx={{ padding: 2 }} variant={'outlined'}>
                        <Typography>{'90% de passes certos'}</Typography>
                    </Paper>
                    <Paper sx={{ padding: 2 }} variant={'outlined'}>
                        <Typography>{'10 desarmes por jogo'}</Typography>
                    </Paper>
                    <Paper sx={{ padding: 2 }} variant={'outlined'}>
                        <Typography>{'5 gols por jogo'}</Typography>
                    </Paper>
                </Stack>
            </Grid2>
        </Grid2>
    )
}

export default Builder
