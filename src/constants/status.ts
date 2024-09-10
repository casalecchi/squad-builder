import { Status } from '../models'

export const statusIdMap: { [key: number]: Status } = {
    2: 'doubt',
    3: 'suspended',
    5: 'injured',
    6: 'noStatus',
    7: 'probable',
}
