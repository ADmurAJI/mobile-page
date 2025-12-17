import type { ThemeOptions } from '@mui/material/styles'

export const typography: ThemeOptions['typography'] = {
	fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
	
	h6: {
		fontSize: 22,
		fontWeight: 600,
		lineHeight: '28px',
	},
	
	subtitle1: {
		fontSize: 16,
		fontWeight: 600,
		lineHeight: '20px',
	},
	
	body1: {
		fontSize: 14,
		fontWeight: 500,
		lineHeight: '18px',
	},
	
	body2: {
		fontSize: 12,
		fontWeight: 500,
		lineHeight: '16px',
		color: '#8E8E93',
	},
	
	caption: {
		fontSize: 33,
		fontWeight: 300,
		lineHeight: '33px',
	},
}
