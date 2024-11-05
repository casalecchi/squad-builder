import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDataContext } from '../../../contexts/DataContext'
import { StatMetric } from '../../../models'

export const SelectDefaultMetric: FC = () => {
    const { t } = useTranslation()
    const { defaultMetric, isPercentageTab, setDefaultMetric, setOldMetric } = useDataContext()
    const types: StatMetric[] = isPercentageTab ? ['mean'] : ['total', 'game', '90min']

    const handleChange = (event: SelectChangeEvent) => {
        if (!isPercentageTab) setOldMetric(event.target.value as StatMetric)
        setDefaultMetric(event.target.value as StatMetric)
    }

    return (
        <Select onChange={handleChange} value={defaultMetric}>
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
