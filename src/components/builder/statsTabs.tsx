import { DonutLarge, Insights, Leaderboard } from '@mui/icons-material'
import { Tabs, Tab, SxProps, Typography, Stack } from '@mui/material'
import { FC, ReactNode, SyntheticEvent, useState } from 'react'
import { CardTabEnum } from '../../models'
import { statsCards } from '../../constants/card'
import { StackedStatCards } from './stats/stackedStatCards'
import { useDeviceContext } from '../../contexts/DeviceContext'
import { useTranslation } from 'react-i18next'

const CartolaTabs: FC = () => {
    const { mobile } = useDeviceContext()

    return (
        <Stack direction={mobile ? 'column' : 'row'} spacing={1} sx={{ overflowY: 'auto' }}>
            <StackedStatCards cards={statsCards.filter((card) => !card.negative)} />
            <StackedStatCards cards={statsCards.filter((card) => card.negative)} />
        </Stack>
    )
}

export const StatsTabs: FC = () => {
    const { t } = useTranslation()
    const [value, setValue] = useState<CardTabEnum>(CardTabEnum.cartola)
    const tabHeight = 48
    const heightProp: SxProps = { minHeight: tabHeight, height: tabHeight }

    const handleChange = (_: SyntheticEvent, newValue: CardTabEnum) => {
        setValue(newValue)
    }

    const content: Record<CardTabEnum, ReactNode> = {
        cartola: <CartolaTabs />,
        others: <Typography>1</Typography>,
        percentage: <Typography>2</Typography>,
    }

    return (
        <>
            <Tabs onChange={handleChange} sx={{ ...heightProp }} value={value}>
                <Tab
                    icon={<DonutLarge />}
                    iconPosition={'start'}
                    label={t(`tabs.${CardTabEnum.cartola}`)}
                    sx={{ ...heightProp }}
                    value={CardTabEnum.cartola}
                />
                <Tab
                    icon={<Insights />}
                    iconPosition={'start'}
                    label={t(`tabs.${CardTabEnum.others}`)}
                    sx={{ ...heightProp }}
                    value={CardTabEnum.others}
                />
                <Tab
                    icon={<Leaderboard />}
                    iconPosition={'start'}
                    label={t(`tabs.${CardTabEnum.percentage}`)}
                    sx={{ ...heightProp }}
                    value={CardTabEnum.percentage}
                />
            </Tabs>
            {content[value]}
        </>
    )
}
