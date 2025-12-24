import { Box, Paper, Typography } from '@mui/material'
import { ChangeEvent, useRef } from 'react'
import { CircleButton } from './CircleButton'

interface AmountInputProps {
	assetLabel: string
	inputValue: string
	isActive?: boolean
	
	minValue: number
	maxValue: number
	stepValue: number
	decimalPrecision: number
	
	onInputChange: (value: string) => void
	onValueCommit: (value: number) => void
	onInputFocus: () => void
}

export function AmountInput({
	                            assetLabel,
	                            inputValue,
	                            isActive,
	                            minValue,
	                            maxValue,
	                            stepValue,
	                            decimalPrecision,
	                            onInputChange,
	                            onValueCommit,
	                            onInputFocus,
                            }: AmountInputProps) {
	const lastCommittedValueRef = useRef<number | null>(null)
	
	const clampValue = (value: number) =>
		Math.min(Math.max(value, minValue), maxValue)
	
	const applyDecimalPrecision = (value: number) =>
		decimalPrecision > 0
			? Number(value.toFixed(decimalPrecision))
			: value
	
	const normalizeInputValue = (value: string) => {
		if (!/^\d*\.?\d*$/.test(value)) return null
		
		if (decimalPrecision > 0 && value.includes('.')) {
			const [integerPart, fractionalPart] = value.split('.')
			return `${integerPart}.${fractionalPart.slice(0, decimalPrecision)}`
		}
		
		return value
	}
	
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const normalizedValue = normalizeInputValue(event.target.value)
		if (normalizedValue === null) return
		onInputChange(normalizedValue)
	}
	
	const handleInputBlur = () => {
		if (inputValue === '' || inputValue === '.') {
			if (lastCommittedValueRef.current !== minValue) {
				lastCommittedValueRef.current = minValue
				onInputChange(String(minValue))
				onValueCommit(minValue)
			}
			return
		}
		
		const numericValue = clampValue(Number(inputValue))
		if (Number.isNaN(numericValue)) return
		
		if (lastCommittedValueRef.current === numericValue) return
		
		lastCommittedValueRef.current = numericValue
		onInputChange(String(numericValue))
		onValueCommit(numericValue)
	}
	
	const currentNumericValue = Number(inputValue) || 0
	
	const increaseValue = () => {
		const nextValue = clampValue(
			applyDecimalPrecision(currentNumericValue + stepValue),
		)
		lastCommittedValueRef.current = nextValue
		onInputChange(String(nextValue))
		onValueCommit(nextValue)
	}
	
	const decreaseValue = () => {
		const nextValue = clampValue(
			applyDecimalPrecision(currentNumericValue - stepValue),
		)
		lastCommittedValueRef.current = nextValue
		onInputChange(String(nextValue))
		onValueCommit(nextValue)
	}
	
	return (
		<Box width="100%">
			<Box
				sx={(theme) => ({
					width: '100%',
					borderRadius: 1,
					border: isActive
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
						{assetLabel}
					</Typography>
					
					<Box display="flex" alignItems="center">
						<CircleButton onClick={decreaseValue}>−</CircleButton>
						
						<input
							value={inputValue}
							onChange={handleInputChange}
							onBlur={handleInputBlur}
							onFocus={onInputFocus}
							inputMode="decimal"
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
						
						<CircleButton onClick={increaseValue}>+</CircleButton>
					</Box>
				</Paper>
			</Box>
		</Box>
	)
}
