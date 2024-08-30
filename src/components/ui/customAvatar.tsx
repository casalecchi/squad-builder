import { Avatar, AvatarProps, colors } from '@mui/material'
import { FC } from 'react'

interface CustomAvatar extends AvatarProps {
    bgColor?: string
}

const CustomAvatar: FC<CustomAvatar> = ({ bgColor = colors.blueGrey[800], children, ...props }) => {
    return (
        <Avatar sx={{ backgroundColor: bgColor }} {...props}>
            {children}
        </Avatar>
    )
}

export default CustomAvatar
