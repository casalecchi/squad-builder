import { MenuItem, Select } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDataContext } from '../../../contexts/DataContext'
import { StatMetric } from '../../../models'

export const SelectDefaultMetric: FC = () => {
    const { t } = useTranslation()
    const { defaultMetric, metricTypes, setDefaultMetric } = useDataContext()

    return (
        <Select
            onChange={(event) => setDefaultMetric(event.target.value as StatMetric)}
            value={defaultMetric}
        >
            <MenuItem disabled value="">
                {t(`statMetric.default`).toUpperCase()}
            </MenuItem>
            {metricTypes.map((type) => (
                <MenuItem key={type} value={type}>
                    {t(`statMetric.${type}`).toUpperCase()}
                </MenuItem>
            ))}
        </Select>
    )
}
