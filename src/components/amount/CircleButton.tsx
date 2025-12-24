import { Box } from '@mui/material'

interface Props {
	children: string
	onClick?: () => void
}

export function CircleButton({ children, onClick }: Props) {
	return (
		<Box
			onClick={onClick}
			sx={(theme) => ({
				width: 'clamp(20px, 6vw, 26px)',
				height: 'clamp(20px, 6vw, 26px)',
				borderRadius: 50,
				bgcolor: theme.palette.divider,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flex: '0 0 auto',
				cursor: 'pointer',
				userSelect: 'none',
			})}
		>
			<Box
				sx={(theme) => ({
					fontSize: 'clamp(24px, 8vw, 28px)',
					fontWeight: 400,
					color: theme.palette.text.primary,
					lineHeight: 1,
					transform: 'translateY(-5%)',
					pointerEvents: 'none',
				})}
			>
				{children}
			</Box>
		</Box>
	)
}
