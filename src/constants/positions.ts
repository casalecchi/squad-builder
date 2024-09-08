import { Position } from '../models'

export const positionIdMap: { [key: number]: Position } = {
    1: { code: 'gk', name: 'Goalkeeper' },
    2: { code: 'wb', name: 'Wingback' },
    3: { code: 'cb', name: 'Centerback' },
    4: { code: 'mid', name: 'Midfielder' },
    5: { code: 'st', name: 'Striker' },
    6: { code: 'man', name: 'Manager' },
}
