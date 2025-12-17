import { Box } from '@mui/material'
import type { PropsWithChildren } from 'react'

export function AppLayout({ children }: PropsWithChildren) {
	return (
		<Box
			sx={{
				minHeight: '100vh',
				maxWidth: 600,
				mx: 'auto',
				px: 2,
				py: 2.5,
			}}
		>
			{children}
		</Box>
	);
}
