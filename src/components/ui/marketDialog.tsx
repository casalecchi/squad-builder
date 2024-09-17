import { Close } from '@mui/icons-material'
import { Dialog, DialogTitle, IconButton } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { useDataContext } from '../../contexts/DataContext'

const MarketDialog: FC<PropsWithChildren> = ({ children }) => {
    const { t } = useTranslation()
    const { isMarketOpen, closeMarket } = useDataContext()

    return (
        <Dialog fullWidth maxWidth={'lg'} onClose={closeMarket} open={isMarketOpen}>
            <DialogTitle>{t('market.title')}</DialogTitle>
            <IconButton onClick={closeMarket} sx={{ position: 'absolute', right: 10, top: 8 }}>
                <Close />
            </IconButton>
            {children}
        </Dialog>
    )
}

export default MarketDialog
