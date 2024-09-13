import { PlayerArea } from '../models'

// --------------------------------- GOALKEEPER ---------------------------------------
export const goalkeeperPosition: PlayerArea = { code: 'gk', bottom: '2%', left: '50%' }

// --------------------------------- DEFENDERS ----------------------------------------
export const threeRightCenterback: PlayerArea = { code: 'cb', bottom: '22%', left: '75%' }
export const threeCenterCenterback: PlayerArea = { code: 'cb', bottom: '22%', left: '50%' }
export const threeLeftCenterback: PlayerArea = { code: 'cb', bottom: '22%', left: '25%' }
export const threeDefenders = [threeLeftCenterback, threeCenterCenterback, threeRightCenterback]

export const fourRightWingBack: PlayerArea = { code: 'wb', bottom: '27%', left: '80%' }
export const fourRightCenterback: PlayerArea = { code: 'cb', bottom: '21%', left: '60%' }
export const fourLeftCenterback: PlayerArea = { code: 'cb', bottom: '21%', left: '40%' }
export const fourLeftWingBack: PlayerArea = { code: 'wb', bottom: '27%', left: '20%' }
export const fourDefenders = [
    fourLeftWingBack,
    fourRightWingBack,
    fourLeftCenterback,
    fourRightCenterback,
]

export const fiveRightWingBack: PlayerArea = { code: 'wb', bottom: '34%', left: '80%' }
export const fiveRightCenterback: PlayerArea = { code: 'cb', bottom: '21%', left: '68%' }
export const fiveCenterCenterback: PlayerArea = { code: 'cb', bottom: '21%', left: '50%' }
export const fiveLeftCenterback: PlayerArea = { code: 'cb', bottom: '21%', left: '32%' }
export const fiveLeftWingBack: PlayerArea = { code: 'wb', bottom: '34%', left: '20%' }
export const fiveDefenders = [
    fiveLeftWingBack,
    fiveRightWingBack,
    fiveLeftCenterback,
    fiveCenterCenterback,
    fiveRightCenterback,
]

// --------------------------------- MIDFIELDERS ---------------------------------------
export const threeRightMidfielder: PlayerArea = { code: 'mid', bottom: '51%', left: '73%' }
export const threeCenterMidfielder: PlayerArea = { code: 'mid', bottom: '49%', left: '50%' }
export const threeLeftMidfielder: PlayerArea = { code: 'mid', bottom: '51%', left: '27%' }
export const threeMidfielders = [threeLeftMidfielder, threeCenterMidfielder, threeRightMidfielder]

export const fourRightMidfielder: PlayerArea = { code: 'mid', bottom: '50%', left: '75%' }
export const fourRightCenterMidfielder: PlayerArea = { code: 'mid', bottom: '45%', left: '60%' }
export const fourLeftCenterMidfielder: PlayerArea = { code: 'mid', bottom: '45%', left: '40%' }
export const fourLeftMidfielder: PlayerArea = { code: 'mid', bottom: '50%', left: '25%' }
export const fourMidfielders = [
    fourLeftMidfielder,
    fourLeftCenterMidfielder,
    fourRightCenterMidfielder,
    fourRightMidfielder,
]

export const fiveRightMidfielder: PlayerArea = { code: 'mid', bottom: '50%', left: '75%' }
export const fiveRightCenterMidfielder: PlayerArea = { code: 'mid', bottom: '45%', left: '60%' }
export const fiveLeftCenterMidfielder: PlayerArea = { code: 'mid', bottom: '45%', left: '40%' }
export const fiveLeftMidfielder: PlayerArea = { code: 'mid', bottom: '50%', left: '25%' }
export const fiveCenterMidfielder: PlayerArea = { code: 'mid', bottom: '58%', left: '50%' }
export const fiveMidfielders = [
    fiveLeftMidfielder,
    fiveLeftCenterMidfielder,
    fiveRightCenterMidfielder,
    fiveRightMidfielder,
    fiveCenterMidfielder,
]

// --------------------------------- STRIKERS -----------------------------------------
export const oneStriker: PlayerArea = { code: 'st', bottom: '73%', left: '50%' }

export const twoRightStriker: PlayerArea = { code: 'st', bottom: '73%', left: '60%' }
export const twoLeftStriker: PlayerArea = { code: 'st', bottom: '73%', left: '40%' }
export const twoStrikers = [twoLeftStriker, twoRightStriker]

export const threeRightStriker: PlayerArea = { code: 'st', bottom: '70%', left: '75%' }
export const threeCenterStriker: PlayerArea = { code: 'st', bottom: '73%', left: '50%' }
export const threeLeftStriker: PlayerArea = { code: 'st', bottom: '70%', left: '25%' }
export const threeStrikers = [threeLeftStriker, threeCenterStriker, threeRightStriker]
