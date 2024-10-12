import { Paper, PaperProps } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

export const CustomPaper: FC<PropsWithChildren<PaperProps>> = ({ sx, children, ...props }) => {
    return (
        <Paper
            {...props}
            variant={'outlined'}
            sx={{
                alignItems: 'center',
                borderRadius: 2,
                flex: 1,
                justifyContent: 'center',
                display: 'flex',
                padding: 2,
                ...sx,
            }}
        >
            {children}
        </Paper>
    )
}
