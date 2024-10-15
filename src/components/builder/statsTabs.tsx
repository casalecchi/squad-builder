import { DonutLarge, Insights, Leaderboard } from '@mui/icons-material'
import { Tabs, Tab, SxProps, Typography, Stack } from '@mui/material'
import { FC, ReactNode, SyntheticEvent, useState } from 'react'
import { CardTabColumn, CardTabEnum } from '../../models'
import { statsCards } from '../../constants/card'
import { StackedStatCards } from './stats/stackedStatCards'
import { useDeviceContext } from '../../contexts/DeviceContext'
import { useTranslation } from 'react-i18next'

const CartolaTabs: FC = () => {
    const { mobile } = useDeviceContext()
    const filteredCards = statsCards.filter((card) => card.tab == CardTabEnum.cartola)

    return (
        <Stack direction={mobile ? 'column' : 'row'} spacing={1} sx={{ overflowY: 'auto' }}>
            <StackedStatCards
                cards={filteredCards.filter((card) => card.column == CardTabColumn.positive)}
            />
            <StackedStatCards
                cards={filteredCards.filter((card) => card.column == CardTabColumn.negative)}
            />
        </Stack>
    )
}

const OthersTabs: FC = () => {
    const { mobile } = useDeviceContext()
    const filteredCards = statsCards.filter((card) => card.tab == CardTabEnum.others)

    return (
        <Stack direction={mobile ? 'column' : 'row'} spacing={1} sx={{ overflowY: 'auto' }}>
            <StackedStatCards cards={filteredCards} />
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
        others: <OthersTabs />,
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
