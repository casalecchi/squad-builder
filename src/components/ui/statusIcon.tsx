import { FC } from 'react'
import { Status } from '../../models'
import { Add, Check, QuestionMark } from '@mui/icons-material'
import redCard from '../../assets/red-card.svg'
import colors from '../../styles/colors.module.scss'

interface StatusIconProps {
    status: Status
}

const StatusIcon: FC<StatusIconProps> = ({ status }) => {
    switch (status) {
        case 'doubt':
            return <QuestionMark sx={{ color: 'orange' }} />
        case 'suspended':
            return <img src={redCard} />
        case 'injured':
            return <Add sx={{ color: 'red' }} />
        case 'noStatus':
            return <></>
        case 'probable':
            return <Check sx={{ color: colors.lightGreen }} />
    }
}

export default StatusIcon
