import { Box, Typography } from '@mui/material'

export function SliderRow() {
	const sliderSteps = ['min', '50%', '75%', 'max']
	const activeStepIndex = 1
	
	return (
		<Box display="flex" gap={1.2} mt={1.25}>
			{sliderSteps.map((label, stepIndex) => {
				const isActive = stepIndex <= activeStepIndex
				
				return (
					<Box key={label} flex={1} textAlign="center">
						<Box
							height={10}
							borderRadius={50}
							bgcolor={isActive ? 'text.primary' : 'divider'}
							mb={0.75}
						/>
						<Typography variant="body2">
							{label}
						</Typography>
					</Box>
				)
			})}
		</Box>
	)
}
