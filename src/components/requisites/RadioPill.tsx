import { Box, Typography } from '@mui/material'

interface Props {
	label: string
	active?: boolean
}

export function RadioPill({ label, active = false }: Props) {
	return (
		<Box display="flex" alignItems="center" gap={1.25}>
			<Box
				sx={(theme) => ({
					width: 22,
					height: 22,
					borderRadius: '50%',
					display: 'grid',
					placeItems: 'center',
					boxSizing: 'border-box',
					border: active
						? 'none'
						: `2px solid ${theme.palette.text.primary}`,
					backgroundColor: active
						? theme.palette.secondary.main
						: 'transparent',
				})}
			>
				{active && (
					<Box
						sx={(theme) => ({
							width: 10,
							height: 10,
							borderRadius: 50,
							backgroundColor: theme.palette.text.primary,
						})}
					/>
				)}
			</Box>
			
			<Typography variant="body1">
				{label}
			</Typography>
		</Box>
	)
}
