import { Stack, Typography, Select, ListSubheader, MenuItem, StackProps } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const FormationSelector: FC<StackProps> = (props) => {
    const { t } = useTranslation()

    return (
        <Stack alignItems={'center'} direction={'row'} gap={2} {...props}>
            <Typography>{t('builder.formationGroups.title')}</Typography>
            <Select color="secondary" defaultValue={3}>
                <ListSubheader>{t('builder.formationGroups.three')}</ListSubheader>
                <MenuItem value={1}>3-4-3</MenuItem>
                <MenuItem value={2}>3-5-2</MenuItem>
                <ListSubheader>{t('builder.formationGroups.four')}</ListSubheader>
                <MenuItem value={3}>4-3-3</MenuItem>
                <MenuItem value={4}>4-4-2</MenuItem>
                <MenuItem value={5}>4-5-1</MenuItem>
                <ListSubheader>{t('builder.formationGroups.five')}</ListSubheader>
                <MenuItem value={6}>5-3-2</MenuItem>
                <MenuItem value={7}>5-4-1</MenuItem>
            </Select>
        </Stack>
    )
}

export default FormationSelector
