import { MoreVert } from '@mui/icons-material'
import {
    Stack,
    Typography,
    IconButton,
    Popover,
    ListItemButton,
    ListItem,
    ListItemText,
    List,
    ListSubheader,
} from '@mui/material'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { StatType } from '../../../models'
import { t } from 'i18next'
import colors from '../../../styles/colors.module.scss'

interface OptionsProps {
    statType: StatType
    selectedStatType: StatType
    onStatTypeSelection: (selectedStatType: StatType) => void
}

const Option: FC<OptionsProps> = ({ statType, selectedStatType, onStatTypeSelection }) => (
    <ListItemButton
        onClick={() => onStatTypeSelection(statType)}
        selected={statType === selectedStatType}
        sx={{ p: 1 }}
    >
        <ListItem sx={{ padding: 0 }}>
            <ListItemText
                primary={t(`statType.${statType}`).toUpperCase()}
                primaryTypographyProps={{ fontSize: '0.7rem' }}
            />
        </ListItem>
    </ListItemButton>
)

interface SelectStatType {
    selectedStatType: StatType
    typesToDisplay: StatType[]
    setSelectedStatType: Dispatch<SetStateAction<StatType>>
}

export const SelectStatType: FC<SelectStatType> = ({
    selectedStatType,
    typesToDisplay,
    setSelectedStatType,
}) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>()
    const open = Boolean(anchorEl)

    const onStatTypeSelection = (statType: StatType) => {
        setSelectedStatType(statType)
        handleClose()
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Stack alignItems={'center'} direction={'row'}>
            <Typography fontSize={'0.75rem'} mr={0.5} sx={{ opacity: 0.4 }}>
                {t(`statType.${selectedStatType}`).toUpperCase()}
            </Typography>
            <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} sx={{ p: 0.5 }}>
                <MoreVert color="primary" />
            </IconButton>
            <Popover
                anchorEl={anchorEl}
                onClose={handleClose}
                open={open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <List>
                    {/* TODO - Escolher se subheader vai ou fica */}
                    <ListSubheader
                        sx={{
                            color: colors.lightGray,
                            backgroundColor: 'initial',
                            height: '1.5rem',
                            lineHeight: 1.5,
                            '&:before': {
                                borderBottom: `1px solid ${colors.lightGray}`,
                                content: `' '`,
                                display: 'block',
                                position: 'absolute',
                                bottom: 0,
                                left: '1rem',
                                right: '1rem',
                            },
                        }}
                    >
                        {t('statType.choose')}
                    </ListSubheader>
                    {typesToDisplay.map((statType) => (
                        <Option
                            key={statType}
                            onStatTypeSelection={onStatTypeSelection}
                            selectedStatType={selectedStatType}
                            statType={statType}
                        />
                    ))}
                </List>
            </Popover>
        </Stack>
    )
}
