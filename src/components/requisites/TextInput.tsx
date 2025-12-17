import { Box, Paper } from '@mui/material'

interface Props {
	label: string
	insideCard?: boolean
}

export function TextInput({ label, insideCard = false }: Props) {
	const content = (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			sx={{
				minHeight: 56,
				'& input::placeholder': {
					color: 'text.primary',
				},
			}}
		>
			<input
				placeholder={label}
				aria-label={label}
				style={{
					width: '100%',
					border: 'none',
					outline: 'none',
					background: 'transparent',
					fontSize: 24,
					fontWeight: 500,
					color: 'inherit',
					padding: 0,
				}}
			/>
			
			<Box width={30} height={30} ml={2}>
				<img
					src="/icons/edit-icon.svg"
					alt=""
					style={{ width: '100%', height: '100%' }}
				/>
			</Box>
		</Box>
	)
	
	if (insideCard) return content
	
	return <Paper sx={{ p: 2 }}>{content}</Paper>
}
