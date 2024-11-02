import { MenuItem, Select } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDataContext } from '../../../contexts/DataContext'
import { StatMetric } from '../../../models'

export const SelectDefaultMetric: FC = () => {
    const { t } = useTranslation()
    const { defaultMetric, setDefaultMetric } = useDataContext()
    const types: StatMetric[] = ['total', 'game', '90min']

    return (
        <Select
            onChange={(event) => setDefaultMetric(event.target.value as StatMetric)}
            value={defaultMetric}
        >
            <MenuItem disabled value="">
                {t(`statMetric.default`).toUpperCase()}
            </MenuItem>
            {types.map((type) => (
                <MenuItem key={type} value={type}>
                    {t(`statMetric.${type}`).toUpperCase()}
                </MenuItem>
            ))}
        </Select>
    )
}
