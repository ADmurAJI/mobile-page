import { createTheme } from '@mui/material/styles'
import { typography } from './typography'

const COLORS = {
	bg: '#F7F7F5',
	card: '#FFFFFF',
	muted: '#ECEDEF',
	text: '#111111',
	sub: '#8E8E93',
	blue: '#5B7BBB',
	yellow: '#FFD60A',
}

export const theme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: COLORS.bg,
			paper: COLORS.card,
		},
		text: {
			primary: COLORS.text,
			secondary: COLORS.sub,
		},
		primary: {
			main: COLORS.text,
		},
		secondary: {
			main: COLORS.yellow,
		},
		divider: COLORS.muted,
	},
	
	typography,
	
	spacing: 8,
	
	shape: { borderRadius: 1, },
	
	breakpoints: {
		values: {
			xs: 0,
			sm: 320,
			md: 600,
			lg: 900,
			xl: 1200,
		},
	},
	
	components: {
		
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
				},
				input: {
					fontFamily: 'inherit',
				},
				textarea: {
					fontFamily: 'inherit',
				},
				button: {
					fontFamily: 'inherit',
				},
			},
		},
		
		MuiAvatar: {
			styleOverrides: {
				root: {
					width: 32,
					height: 32,
					backgroundColor: COLORS.blue,
					color: COLORS.card,
				},
			},
		},
		
		MuiTypography: {
			styleOverrides: {
				h6: {
					marginBottom: 16,
				},
				body2: {
					fontWeight: 700,
				},
			},
		},
		
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					boxShadow: 'none',
					backgroundImage: 'none',
				},
			},
		},
		
		MuiCheckbox: {
			styleOverrides: {
				root: {
					padding: 0,
				},
			},
		},
	},
})
