import { ALL_FORMATIONS } from '../constants/formations'

export const findFormation = (id: string) => ALL_FORMATIONS.find((formation) => formation.id == id)
