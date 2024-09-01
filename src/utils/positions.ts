import { Position } from '../models'

// --------------------------------- GOALKEEPER ---------------------------------------
export const goalkeeperPosition: Position = { code: 'gk', bottom: '10%', left: '50%' }

// --------------------------------- DEFENDERS ----------------------------------------
export const threeRightCenterback: Position = { code: 'cb', bottom: '25%', left: '75%' }
export const threeCenterCenterback: Position = { code: 'cb', bottom: '25%', left: '50%' }
export const threeLeftCenterback: Position = { code: 'cb', bottom: '25%', left: '25%' }
export const threeDefenders = [threeRightCenterback, threeCenterCenterback, threeLeftCenterback]

export const fourRightWingBack: Position = { code: 'wb', bottom: '35%', left: '80%' }
export const fourRightCenterback: Position = { code: 'cb', bottom: '27%', left: '60%' }
export const fourLeftCenterback: Position = { code: 'cb', bottom: '27%', left: '40%' }
export const fourLeftWingBack: Position = { code: 'wb', bottom: '35%', left: '20%' }
export const fourDefenders = [
    fourRightWingBack,
    fourRightCenterback,
    fourLeftCenterback,
    fourLeftWingBack,
]

export const fiveRightWingBack: Position = { code: 'wb', bottom: '33%', left: '80%' }
export const fiveRightCenterback: Position = { code: 'cb', bottom: '25%', left: '65%' }
export const fiveCenterCenterback: Position = { code: 'cb', bottom: '25%', left: '50%' }
export const fiveLeftCenterback: Position = { code: 'cb', bottom: '25%', left: '35%' }
export const fiveLeftWingBack: Position = { code: 'wb', bottom: '33%', left: '20%' }
export const fiveDefenders = [
    fiveRightWingBack,
    fiveRightCenterback,
    fiveCenterCenterback,
    fiveLeftCenterback,
    fiveLeftWingBack,
]

// --------------------------------- MIDFIELDERS ---------------------------------------
export const threeRightMidfielder: Position = { code: 'mid', bottom: '47%', left: '63%' }
export const threeCenterMidfielder: Position = { code: 'mid', bottom: '57%', left: '50%' }
export const threeLeftMidfielder: Position = { code: 'mid', bottom: '47%', left: '37%' }
export const threeMidfielders = [threeRightMidfielder, threeCenterMidfielder, threeLeftMidfielder]

export const fourRightMidfielder: Position = { code: 'mid', bottom: '57%', left: '75%' }
export const fourRightCenterMidfielder: Position = { code: 'mid', bottom: '48%', left: '60%' }
export const fourLeftCenterMidfielder: Position = { code: 'mid', bottom: '48%', left: '40%' }
export const fourLeftMidfielder: Position = { code: 'mid', bottom: '57%', left: '25%' }
export const fourMidfielders = [
    fourRightMidfielder,
    fourRightCenterMidfielder,
    fourLeftCenterMidfielder,
    fourLeftMidfielder,
]

export const fiveRightMidfielder: Position = { code: 'mid', bottom: '60%', left: '80%' }
export const fiveRightCenterMidfielder: Position = { code: 'mid', bottom: '50%', left: '65%' }
export const fiveLeftCenterMidfielder: Position = { code: 'mid', bottom: '50%', left: '35%' }
export const fiveLeftMidfielder: Position = { code: 'mid', bottom: '60%', left: '20%' }
export const fiveCenterMidfielder: Position = { code: 'mid', bottom: '42%', left: '50%' }
export const fiveMidfielders = [
    fiveRightMidfielder,
    fiveRightCenterMidfielder,
    fiveLeftCenterMidfielder,
    fiveLeftMidfielder,
    fiveCenterMidfielder,
]

// --------------------------------- STRIKERS -----------------------------------------
export const oneStriker: Position = { code: 'st', bottom: '80%', left: '50%' }

export const twoRightStriker: Position = { code: 'st', bottom: '75%', left: '60%' }
export const twoLeftStriker: Position = { code: 'st', bottom: '75%', left: '40%' }
export const twoStrikers = [twoRightStriker, twoLeftStriker]

export const threeRightStriker: Position = { code: 'st', bottom: '75%', left: '75%' }
export const threeCenterStriker: Position = { code: 'st', bottom: '80%', left: '50%' }
export const threeLeftStriker: Position = { code: 'st', bottom: '75%', left: '25%' }
export const threeStrikers = [threeRightStriker, threeCenterStriker, threeLeftStriker]
