import { Gauge, gaugeClasses } from '@mui/x-charts'
import { FC } from 'react'
import { getNegativeColor, getPositiveColor } from '../../../utils/stats'

interface StatGaugeProps {
    value: number
    maxValue: number
    negative?: boolean
}

export const StatGauge: FC<StatGaugeProps> = ({ value, maxValue, negative }) => {
    const color = negative ? getNegativeColor(value, maxValue) : getPositiveColor(value, maxValue)

    return (
        <Gauge
            endAngle={90}
            height={100}
            startAngle={-90}
            value={value}
            valueMax={value > maxValue ? value : maxValue}
            valueMin={0}
            width={100}
            sx={{
                [`& .${gaugeClasses.valueArc}`]: {
                    fill: color,
                },
            }}
        />
    )
}
