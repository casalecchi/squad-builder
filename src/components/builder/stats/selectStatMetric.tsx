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
import { StatMetric } from '../../../models'
import colors from '../../../styles/colors.module.scss'
import { useTranslation } from 'react-i18next'

interface OptionsProps {
    statMetric: StatMetric
    selectedStatMetric: StatMetric
    onStatMetricSelection: (selectedMetricType: StatMetric) => void
}

const Option: FC<OptionsProps> = ({ statMetric, selectedStatMetric, onStatMetricSelection }) => {
    const { t } = useTranslation()
    return (
        <ListItemButton
            onClick={() => onStatMetricSelection(statMetric)}
            selected={statMetric === selectedStatMetric}
            sx={{ p: 1 }}
        >
            <ListItem sx={{ padding: 0 }}>
                <ListItemText
                    primary={t(`statMetric.${statMetric}`).toUpperCase()}
                    primaryTypographyProps={{ fontSize: '0.7rem' }}
                />
            </ListItem>
        </ListItemButton>
    )
}

interface SelectStatMetric {
    selectedStatMetric: StatMetric
    typesToDisplay: StatMetric[]
    setSelectedStatMetric: Dispatch<SetStateAction<StatMetric>>
}

export const SelectStatMetric: FC<SelectStatMetric> = ({
    selectedStatMetric,
    typesToDisplay,
    setSelectedStatMetric,
}) => {
    const { t } = useTranslation()
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>()
    const open = Boolean(anchorEl)

    const onStatMetricSelection = (statMetric: StatMetric) => {
        setSelectedStatMetric(statMetric)
        handleClose()
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Stack alignItems={'center'} direction={'row'}>
            <Typography fontSize={'0.75rem'} mr={0.5} sx={{ opacity: 0.4 }}>
                {t(`statMetric.${selectedStatMetric}`).toUpperCase()}
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
                        {t('statMetric.choose')}
                    </ListSubheader>
                    {typesToDisplay.map((statMetric) => (
                        <Option
                            key={statMetric}
                            onStatMetricSelection={onStatMetricSelection}
                            selectedStatMetric={selectedStatMetric}
                            statMetric={statMetric}
                        />
                    ))}
                </List>
            </Popover>
        </Stack>
    )
}
