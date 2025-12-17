import { Box, Typography } from '@mui/material'
import { AmountInput } from './AmountInput'

interface Item {
	topLabel: string
	asset: string
	value: string
	active?: boolean
}

interface Props {
	items: Item[]
}

export function AmountSection({ items }: Props) {
	return (
		<Box mt={3} mb={2.5}>
			<Typography variant="h6">
				Объемы
			</Typography>
			
			<Box
				display="grid"
				gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
				gap={1.5}
				mt={1.5}
			>
				{items.map((item, index) => (
					<Box key={index} width="100%" minWidth={0}>
						<Typography
							variant="body2"
							sx={{
								mb: 0.75,
								textAlign: index === 1 ? 'right' : 'left',
							}}
						>
							{item.topLabel}
						</Typography>
						
						<AmountInput
							asset={item.asset}
							value={item.value}
							active={item.active}
						/>
					</Box>
				))}
			</Box>
		</Box>
	)
}
