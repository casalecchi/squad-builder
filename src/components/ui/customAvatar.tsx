import { Avatar, AvatarProps } from '@mui/material'
import { FC } from 'react'
import colors from '../../styles/colors.module.scss'

interface CustomAvatarProps extends AvatarProps {
    bgColor?: string
}

const CustomAvatar: FC<CustomAvatarProps> = ({
    bgColor = colors.secondary,
    children,
    ...props
}) => {
    return (
        <Avatar sx={{ backgroundColor: bgColor }} {...props}>
            {children}
        </Avatar>
    )
}

export default CustomAvatar
