import { Box, Typography } from '@mui/material'
import { useExchange } from '../../hooks/useExchange'
import { AmountInput } from './AmountInput'

export function AmountSection() {
	const {
		leftInput,
		rightInput,
		setLeftInput,
		setRightInput,
		activeSide,
		setActiveSide,
		leftConfig,
		rightConfig,
	} = useExchange()
	
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
				<Box width="100%" minWidth={0}>
					<Typography variant="body2" sx={{ mb: 0.75 }}>
						Отдаете (лот 1000)
					</Typography>
					
					<AmountInput
						assetLabel="Ethereum, ETH"
						inputValue={leftInput}
						isActive={activeSide === 'left'}
						minValue={leftConfig.min}
						maxValue={leftConfig.max}
						stepValue={leftConfig.step}
						decimalPrecision={6}
						onInputChange={setLeftInput}
						onValueCommit={leftConfig.onChange}
						onInputFocus={() => setActiveSide('left')}
					/>
				</Box>
				
				<Box width="100%" minWidth={0}>
					<Typography
						variant="body2"
						sx={{ mb: 0.75, textAlign: 'right' }}
					>
						Получаете (лот 1000)
					</Typography>
					
					<AmountInput
						assetLabel="Рубль, RUR"
						inputValue={rightInput}
						isActive={activeSide === 'right'}
						minValue={rightConfig.min}
						maxValue={rightConfig.max}
						stepValue={rightConfig.step}
						decimalPrecision={6}
						onInputChange={setRightInput}
						onValueCommit={rightConfig.onChange}
						onInputFocus={() => setActiveSide('right')}
					/>
				</Box>
			</Box>
		</Box>
	)
}
