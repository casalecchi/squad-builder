import {
    Stack,
    Typography,
    Select,
    ListSubheader,
    MenuItem,
    StackProps,
    SelectChangeEvent,
} from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
    fiveFourOne,
    fiveThreeTwo,
    fourFiveOne,
    fourFourTwo,
    fourThreeThree,
    threeFiveTwo,
    threeFourThree,
} from '../../constants'
import { Formation } from '../../models'
import { findFormation } from '../../utils'

interface FormationSelectorProps extends StackProps {
    formationSelected: Formation
    changeFormation: (newFormation: Formation) => void
}

const FormationSelector: FC<FormationSelectorProps> = ({
    formationSelected,
    changeFormation,
    ...props
}) => {
    const { t } = useTranslation()

    const handleFormationChange = (event: SelectChangeEvent) => {
        const newId = event.target.value
        const newFormation = findFormation(newId) ?? fourThreeThree
        changeFormation(newFormation)
    }

    return (
        <Stack alignItems={'center'} direction={'row'} gap={2} {...props}>
            <Typography>{t('builder.formationGroups.title').toUpperCase()}</Typography>
            <Select onChange={handleFormationChange} value={formationSelected.id}>
                <ListSubheader>{t('builder.formationGroups.three')}</ListSubheader>
                <MenuItem value={threeFourThree.id}>3-4-3</MenuItem>
                <MenuItem value={threeFiveTwo.id}>3-5-2</MenuItem>
                <ListSubheader>{t('builder.formationGroups.four')}</ListSubheader>
                <MenuItem value={fourThreeThree.id}>4-3-3</MenuItem>
                <MenuItem value={fourFourTwo.id}>4-4-2</MenuItem>
                <MenuItem value={fourFiveOne.id}>4-5-1</MenuItem>
                <ListSubheader>{t('builder.formationGroups.five')}</ListSubheader>
                <MenuItem value={fiveThreeTwo.id}>5-3-2</MenuItem>
                <MenuItem value={fiveFourOne.id}>5-4-1</MenuItem>
            </Select>
        </Stack>
    )
}

export default FormationSelector
