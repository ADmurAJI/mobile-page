import { Avatar, Box, Paper, Typography } from '@mui/material'

export function BankCard() {
	return (
		<Paper
			sx={(theme) => ({
				mt: theme.spacing(2),
				px: theme.spacing(2),
				py: theme.spacing(2),
				cursor: 'pointer',
			})}
		>
			<Box display="flex" alignItems="center" justifyContent="space-between">
				<Box display="flex" alignItems="center" gap={1.5}>
					<Avatar>
						<Typography variant="caption">₽</Typography>
					</Avatar>
					
					<Box>
						<Typography variant="subtitle1">
							Альфа-банк cash-in
						</Typography>
						<Typography variant="body2">
							1 USDT = 61.55 RUR
						</Typography>
					</Box>
				</Box>
				
				<Box width={12} height={8}>
					<img src="/icons/chevron-down.svg" alt="" />
				</Box>
			</Box>
		</Paper>
	)
}
