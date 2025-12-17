import { Box, Typography } from '@mui/material'

export function SegmentedTabs() {
	const tabLabels = ['Банки', 'Наличные', 'Курьер']
	
	return (
		<Box>
			<Typography variant="h6">
				Способ вывода
			</Typography>
			
			<Box display="flex" gap={1}>
				{tabLabels.map((label, index) => {
					const isActive = index === 0
					
					return (
						<Box
							key={label}
							display="flex"
							alignItems="center"
							justifyContent="center"
							sx={(theme) => ({
								px: 2,
								height: 36,
								cursor: 'pointer',
								borderRadius: 10,
								bgcolor: isActive
									? theme.palette.text.primary
									: theme.palette.background.paper,
							})}
						>
							<Typography
								variant="body1"
								color={isActive ? 'background.paper' : 'text.primary'}
							>
								{label}
							</Typography>
						</Box>
					)
				})}
			</Box>
		</Box>
	)
}
