import { Close } from '@mui/icons-material'
import { Dialog, DialogTitle, IconButton, Stack, Typography } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { useDataContext } from '../../contexts/DataContext'
import { TranslationKey } from '../../@types/i18n'
import StatusIndicator from './statusIndicator'
import { useDeviceContext } from '../../contexts/DeviceContext'

const MarketDialog: FC<PropsWithChildren> = ({ children }) => {
    const { t } = useTranslation()
    const { mobile } = useDeviceContext()
    const { isMarketOpen, teamStateManager, closeMarket } = useDataContext()
    const { marketInfo } = teamStateManager

    return (
        <Dialog
            fullWidth
            fullScreen={mobile}
            maxWidth={'lg'}
            onClose={closeMarket}
            open={isMarketOpen}
        >
            <Stack alignItems={'center'} direction={'row'}>
                <DialogTitle>{t('market.title').toUpperCase()}</DialogTitle>
                <Stack
                    alignItems={'center'}
                    sx={{ position: 'absolute', left: '50%', transform: 'translate(-50%, 0%)' }}
                >
                    <Stack alignItems={'center'} direction={'row'} spacing={1}>
                        <Typography>
                            {t(
                                `market.status.${marketInfo?.status}` as TranslationKey
                            ).toUpperCase()}
                        </Typography>
                        <StatusIndicator size={'2.5rem'} status={marketInfo?.status ?? 'closed'} />
                    </Stack>
                </Stack>
                <IconButton onClick={closeMarket} sx={{ position: 'absolute', right: 10 }}>
                    <Close />
                </IconButton>
            </Stack>
            {children}
        </Dialog>
    )
}

export default MarketDialog
