import { Box, Checkbox, Paper, Typography } from '@mui/material'
import { CheckboxIcon } from './CheckboxIcon'
import { RadioPill } from './RadioPill'
import { TextInput } from './TextInput'

export function RequisitesSection() {
	return (
		<Box>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				mt={3}
				mb={1.5}
			>
				<Typography variant="h6">Реквизиты</Typography>
				
				<Box display="flex" alignItems="center" gap={1.25}>
					<Typography variant="body1" color="text.secondary">
						Сохранить реквизиты
					</Typography>
					
					<Checkbox
						checked
						icon={<CheckboxIcon />}
						checkedIcon={<CheckboxIcon checked />}
					/>
				</Box>
			</Box>
			
			<Paper sx={{ p: 2, mb: 1.5 }}>
				<Box display="flex" alignItems="center" gap={3} mb={1.5}>
					<RadioPill label="Номер карты" active />
					<RadioPill label="Номер договора" />
				</Box>
				
				<TextInput label="Номер карты" insideCard />
			</Paper>
			
			<Box display="grid" gap={1.5}>
				<TextInput label="ФИО владельца" />
				<TextInput label="Адрес" />
			</Box>
		</Box>
	)
}
