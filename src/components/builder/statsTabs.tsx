import { DonutLarge, Insights, Leaderboard } from '@mui/icons-material'
import { Stack, SxProps, Tab, Tabs, Typography } from '@mui/material'
import { FC, ReactNode, SyntheticEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { statsCards } from '../../constants/card'
import { useDeviceContext } from '../../contexts/DeviceContext'
import { CardTabColumn, CardTabEnum } from '../../models'
import { StackedStatCards } from './stats/stackedStatCards'

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
            <StackedStatCards
                cards={filteredCards.filter((card) => card.column == CardTabColumn.first)}
            />
            <StackedStatCards
                cards={filteredCards.filter((card) => card.column == CardTabColumn.second)}
            />
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
        percentage: (
            <Stack alignItems={'center'} width={'100%'}>
                <Typography>Coming Soon...</Typography>
            </Stack>
        ),
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
