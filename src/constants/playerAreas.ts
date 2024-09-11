import { PlayerArea } from '../models'

// --------------------------------- GOALKEEPER ---------------------------------------
export const goalkeeperPosition: PlayerArea = { code: 'gk', bottom: '2%', left: '50%' }

// --------------------------------- DEFENDERS ----------------------------------------
export const threeRightCenterback: PlayerArea = { code: 'cb', bottom: '20%', left: '75%' }
export const threeCenterCenterback: PlayerArea = { code: 'cb', bottom: '20%', left: '50%' }
export const threeLeftCenterback: PlayerArea = { code: 'cb', bottom: '20%', left: '25%' }
export const threeDefenders = [threeLeftCenterback, threeCenterCenterback, threeRightCenterback]

export const fourRightWingBack: PlayerArea = { code: 'wb', bottom: '30%', left: '80%' }
export const fourRightCenterback: PlayerArea = { code: 'cb', bottom: '22%', left: '60%' }
export const fourLeftCenterback: PlayerArea = { code: 'cb', bottom: '22%', left: '40%' }
export const fourLeftWingBack: PlayerArea = { code: 'wb', bottom: '30%', left: '20%' }
export const fourDefenders = [
    fourLeftWingBack,
    fourRightWingBack,
    fourLeftCenterback,
    fourRightCenterback,
]

export const fiveRightWingBack: PlayerArea = { code: 'wb', bottom: '33%', left: '80%' }
export const fiveRightCenterback: PlayerArea = { code: 'cb', bottom: '25%', left: '65%' }
export const fiveCenterCenterback: PlayerArea = { code: 'cb', bottom: '25%', left: '50%' }
export const fiveLeftCenterback: PlayerArea = { code: 'cb', bottom: '25%', left: '35%' }
export const fiveLeftWingBack: PlayerArea = { code: 'wb', bottom: '33%', left: '20%' }
export const fiveDefenders = [
    fiveLeftWingBack,
    fiveRightWingBack,
    fiveLeftCenterback,
    fiveCenterCenterback,
    fiveRightCenterback,
]

// --------------------------------- MIDFIELDERS ---------------------------------------
export const threeRightMidfielder: PlayerArea = { code: 'mid', bottom: '47%', left: '63%' }
export const threeCenterMidfielder: PlayerArea = { code: 'mid', bottom: '57%', left: '50%' }
export const threeLeftMidfielder: PlayerArea = { code: 'mid', bottom: '47%', left: '37%' }
export const threeMidfielders = [threeLeftMidfielder, threeCenterMidfielder, threeRightMidfielder]

export const fourRightMidfielder: PlayerArea = { code: 'mid', bottom: '57%', left: '75%' }
export const fourRightCenterMidfielder: PlayerArea = { code: 'mid', bottom: '48%', left: '60%' }
export const fourLeftCenterMidfielder: PlayerArea = { code: 'mid', bottom: '48%', left: '40%' }
export const fourLeftMidfielder: PlayerArea = { code: 'mid', bottom: '57%', left: '25%' }
export const fourMidfielders = [
    fourLeftMidfielder,
    fourLeftCenterMidfielder,
    fourRightCenterMidfielder,
    fourRightMidfielder,
]

export const fiveRightMidfielder: PlayerArea = { code: 'mid', bottom: '60%', left: '80%' }
export const fiveRightCenterMidfielder: PlayerArea = { code: 'mid', bottom: '50%', left: '65%' }
export const fiveLeftCenterMidfielder: PlayerArea = { code: 'mid', bottom: '50%', left: '35%' }
export const fiveLeftMidfielder: PlayerArea = { code: 'mid', bottom: '60%', left: '20%' }
export const fiveCenterMidfielder: PlayerArea = { code: 'mid', bottom: '42%', left: '50%' }
export const fiveMidfielders = [
    fiveLeftMidfielder,
    fiveLeftCenterMidfielder,
    fiveCenterMidfielder,
    fiveRightCenterMidfielder,
    fiveRightMidfielder,
]

// --------------------------------- STRIKERS -----------------------------------------
export const oneStriker: PlayerArea = { code: 'st', bottom: '80%', left: '50%' }

export const twoRightStriker: PlayerArea = { code: 'st', bottom: '75%', left: '60%' }
export const twoLeftStriker: PlayerArea = { code: 'st', bottom: '75%', left: '40%' }
export const twoStrikers = [twoLeftStriker, twoRightStriker]

export const threeRightStriker: PlayerArea = { code: 'st', bottom: '75%', left: '75%' }
export const threeCenterStriker: PlayerArea = { code: 'st', bottom: '80%', left: '50%' }
export const threeLeftStriker: PlayerArea = { code: 'st', bottom: '75%', left: '25%' }
export const threeStrikers = [threeLeftStriker, threeCenterStriker, threeRightStriker]
