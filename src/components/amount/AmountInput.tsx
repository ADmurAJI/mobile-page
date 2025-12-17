import { Box, Paper, Typography } from '@mui/material'
import { CircleButton } from './CircleButton'

interface Props {
	asset: string
	value: string
	active?: boolean
}

export function AmountInput({ asset, value, active }: Props) {
	return (
		<Box width="100%">
			<Box
				sx={(theme) => ({
					width: '100%',
					borderRadius: 1,
					border: active
						? `3px solid ${theme.palette.info.main}`
						: '3px solid transparent',
				})}
			>
				<Paper
					sx={(theme) => ({
						width: '100%',
						px: theme.spacing(2),
						py: theme.spacing(1.25),
					})}
				>
					<Typography variant="body2" align="center">
						{asset}
					</Typography>
					
					<Box display="flex" alignItems="center">
						<CircleButton>−</CircleButton>
						
						<input
							readOnly
							value={value}
							style={{
								flex: 1,
								minWidth: 0,
								border: 'none',
								outline: 'none',
								background: 'transparent',
								textAlign: 'center',
								fontSize: 'clamp(12px, 3vw, 18px)',
								fontWeight: 700,
								color: 'inherit',
								padding: 0,
							}}
						/>
						
						<CircleButton>+</CircleButton>
					</Box>
				</Paper>
			</Box>
		</Box>
	)
}
