import colors from '../../styles/colors.module.scss'
import { Stack, StackProps } from '@mui/material'
import { FC } from 'react'

export interface CustomCardProps extends StackProps {
    fixedSize?: number | string
}

export const CustomCard: FC<CustomCardProps> = ({ sx, fixedSize, ...props }) => {
    return (
        <Stack
            flex={1}
            {...props}
            sx={{
                background: colors.cardDarkBackground,
                p: 2,
                borderRadius: 2,
                maxWidth: '100%',
                ...(fixedSize
                    ? { minHeight: fixedSize, maxHeight: fixedSize, overflow: 'hidden' }
                    : {}),
                ...sx,
            }}
        />
    )
}
