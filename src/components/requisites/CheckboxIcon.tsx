import { Box } from '@mui/material'

interface Props {
	checked?: boolean
}

export function CheckboxIcon({ checked = false }: Props) {
	return (
		<Box
			sx={(theme) => ({
				width: 22,
				height: 22,
				display: 'grid',
				placeItems: 'center',
				backgroundColor: checked ? theme.palette.secondary.main : 'transparent',
				border: checked
					? 'none'
					: `2px solid rgba(17,17,17,0.2)`,
			})}
		>
			{checked && (
				<Box
					component="span"
					sx={(theme) => ({
						width: 10,
						height: 6,
						borderLeft: `2px solid ${theme.palette.text.primary}`,
						borderBottom: `2px solid ${theme.palette.text.primary}`,
						transform: 'rotate(-45deg)',
						marginTop: '-2px',
					})}
				/>
			)}
		</Box>
	)
}
