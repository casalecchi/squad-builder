import { FC, useState } from 'react'
import { IconButton, Popover, Stack, Typography } from '@mui/material'
import LanguageSwitch from './languageSwitch'
import colors from '../styles/colors.module.scss'
import { Translate } from '@mui/icons-material'

interface SettingsMenuProps {
    noBackground?: boolean
    fixed?: boolean
}

const SettingsMenu: FC<SettingsMenuProps> = ({ noBackground, fixed }) => {
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
                    backgroundColor: noBackground ? undefined : colors.pureBlack,
                    '&:hover': {
                        backgroundColor: noBackground ? undefined : '#1e1e1e',
                    },
                    position: fixed ? 'fixed' : undefined,
                    top: fixed ? 16 : undefined,
                    right: fixed ? 16 : undefined,
                    zIndex: 1000,
                }}
            >
                <Translate />
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
