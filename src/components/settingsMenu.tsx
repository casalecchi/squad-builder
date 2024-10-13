import React, { useState } from 'react'
import { IconButton, Popover, Stack, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import LanguageSwitch from './languageSwitch'

const SettingsMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const isOpen = Boolean(anchorEl)

    return (
        <>
            <IconButton
                color="primary"
                onClick={handleOpen}
                sx={{
                    position: 'fixed',
                    top: 16,
                    right: 16,
                    zIndex: 1000,
                }}
            >
                <SettingsIcon />
            </IconButton>
            <Popover
                disableScrollLock
                anchorEl={anchorEl}
                onClose={handleClose}
                open={isOpen}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Stack p={2}>
                    <Stack alignItems={'center'} direction={'row'}>
                        <Typography>{'EN-US'}</Typography>
                        <LanguageSwitch />
                        <Typography>{'PT-BR'}</Typography>
                    </Stack>
                </Stack>
            </Popover>
        </>
    )
}

export default SettingsMenu
