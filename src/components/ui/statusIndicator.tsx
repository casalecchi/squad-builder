import React from 'react'
import { Box, keyframes } from '@mui/material'
import colors from '../../styles/colors.module.scss'

const pulseAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(1.2);
    opacity: 0;
  }
`

const colorMap = {
    open: colors.playerGreen,
    closed: colors.playerRed,
}

interface StatusIndicatorProps {
    status: 'open' | 'closed'
    size: string | number
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, size }) => {
    const statusColor = colorMap[status]
    const initialSize = `calc(${size} - 20px)`

    return (
        <Box
            alignItems="center"
            display="flex"
            height={size}
            justifyContent="center"
            position="relative"
            width={size}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    backgroundColor: statusColor,
                    animation: `${pulseAnimation} 1.5s infinite ease-in`,
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    width: initialSize,
                    height: initialSize,
                    borderRadius: '50%',
                    backgroundColor: statusColor,
                    zIndex: 2,
                }}
            />
        </Box>
    )
}

export default StatusIndicator
