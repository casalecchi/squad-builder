import { FC, useEffect, useState } from 'react'
import { useDataContext } from '../contexts/DataContext'
import { Close } from '@mui/icons-material'
import { Dialog, DialogTitle, IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'

const FormationAdjustment: FC = () => {
    const { t } = useTranslation()
    const [open, setOpen] = useState<boolean>(false)
    const { teamStateManager } = useDataContext()
    const { adjustment, resetAdjustment } = teamStateManager

    const handleClose = () => {
        setOpen(false)
        resetAdjustment()
    }

    useEffect(() => {
        setOpen(adjustment.needAdjust)
    }, [adjustment])

    return (
        <Dialog fullWidth maxWidth={'lg'} onClose={handleClose} open={open}>
            <DialogTitle>{t('formation.title')}</DialogTitle>
            <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 10, top: 8 }}>
                <Close />
            </IconButton>
        </Dialog>
    )
}

export default FormationAdjustment
