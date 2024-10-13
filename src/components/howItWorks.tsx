import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import time from '../assets/time-exemplo.png'
import { InstructionCard } from './ui/instructionCard'
import { useDeviceContext } from '../contexts/DeviceContext'
import { useTranslation } from 'react-i18next'

const HowItWorks: FC = () => {
    const { t } = useTranslation()
    const { mobile } = useDeviceContext()

    return (
        <Box
            display={'flex'}
            height={'100dvh'}
            id={'howItWorks'}
            justifyContent={'center'}
            sx={{
                backgroundImage: 'url(/old-background.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Stack alignItems={'center'} py={5} spacing={10}>
                <Typography fontSize={'3rem'}>{`${t('app.howItWorks')}?`}</Typography>
                <Stack direction={mobile ? 'column' : 'row'} mt={10} spacing={3}>
                    <InstructionCard image={time} text={`1. ${t('howWorks.step1')}`} />
                    <InstructionCard image={time} text={`2. ${t('howWorks.step2')}`} />
                    <InstructionCard image={time} text={`3. ${t('howWorks.step3')}`} />
                    <InstructionCard image={time} text={`4. ${t('howWorks.step4')}`} />
                </Stack>
                <Typography>{t('howWorks.description')}</Typography>
            </Stack>
        </Box>
    )
}

export default HowItWorks
