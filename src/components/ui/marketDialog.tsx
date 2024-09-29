import { Close } from '@mui/icons-material'
import { Dialog, DialogTitle, IconButton, Stack, Typography } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { useDataContext } from '../../contexts/DataContext'

const MarketDialog: FC<PropsWithChildren> = ({ children }) => {
    const { t } = useTranslation()
    const { isMarketOpen, teamStateManager, closeMarket } = useDataContext()
    const { marketInfo } = teamStateManager

    return (
        <Dialog fullWidth maxWidth={'lg'} onClose={closeMarket} open={isMarketOpen}>
            <Stack alignItems={'center'} direction={'row'}>
                <DialogTitle>{t('market.title')}</DialogTitle>
                <Typography>{`Mercado atualmente está ${marketInfo?.status}`}</Typography>
                <Typography>{`Rodada ${marketInfo?.round}`}</Typography>
                <IconButton onClick={closeMarket} sx={{ position: 'absolute', right: 10, top: 8 }}>
                    <Close />
                </IconButton>
            </Stack>
            {children}
        </Dialog>
    )
}

export default MarketDialog
