import { Box, Stack, Typography } from '@mui/material'
import { FC, useState } from 'react'
import pitch from '../assets/campinho.svg'
import { useTranslation } from 'react-i18next'
import FormationSelector from './formationSelector'
import { fourThreeThree } from '../utils/formations'
import { Formation } from '../models'
import PlayerButton from './player'
import { Player } from '../models/player'

const Builder: FC = () => {
    const { t } = useTranslation()
    const [formation, setFormation] = useState<Formation>(fourThreeThree)
    const mockPlayer = { id: 1, name: 'Cano', positionCode: 'st' }
    const [player, setPlayer] = useState<Player | undefined>(mockPlayer)

    return (
        <Stack alignItems={'center'}>
            <Typography mb={2} variant="h3">
                {t('builder.lineup').toUpperCase()}
            </Typography>
            <FormationSelector formationSelected={formation} mb={2} setFormation={setFormation} />
            <Box height={'85vh'} position={'relative'}>
                <img alt={t('images.pitch')} height={'100%'} src={pitch} />
                <PlayerButton
                    player={player}
                    position={formation.playersPositions[0]}
                    setPlayer={setPlayer}
                />
            </Box>
        </Stack>
    )
}

export default Builder
