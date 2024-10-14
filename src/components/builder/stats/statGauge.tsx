import { Gauge, gaugeClasses } from '@mui/x-charts'
import { FC } from 'react'
import { getPercentageColor } from '../../../utils/stats'

interface StatGaugeProps {
    value: number
}

export const StatGauge: FC<StatGaugeProps> = ({ value }) => {
    const color = getPercentageColor(value)

    return (
        <Gauge
            endAngle={90}
            height={100}
            startAngle={-90}
            text={({ value }) => `${value}%`}
            value={value}
            valueMax={10}
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
