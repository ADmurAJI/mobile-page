import { useEffect, useRef, useState } from 'react'
import { calc } from '../api/api'

type Side = 'left' | 'right'
type PricePair = [number, number]
type Range = { min: number; max: number }

const LEFT_MIN = 10_000
const LEFT_MAX = 70_000_000
const LEFT_STEP = 100
const RIGHT_STEP = 0.000001
const DEBOUNCE_MS = 300

const clamp = (value: number, min: number, max: number) =>
	Math.min(Math.max(value, min), max)

const parsePrice = (priceTuple: [string, string]): PricePair => [
	Number(priceTuple[0]),
	Number(priceTuple[1]),
]

const getRightBounds = (price: PricePair | null): Range => {
	if (!price) return { min: 0, max: 0 }
	return {
		min: LEFT_MIN * price[1],
		max: LEFT_MAX * price[1],
	}
}

export function useExchange() {
	const [leftInput, setLeftInput] = useState(String(LEFT_MIN))
	const [rightInput, setRightInput] = useState('0')
	
	const [leftValue, setLeftValue] = useState(LEFT_MIN)
	const [rightValue, setRightValue] = useState(0)
	
	const [activeSide, setActiveSide] = useState<Side>('left')
	const [price, setPrice] = useState<PricePair | null>(null)
	const [loading, setLoading] = useState(false)
	
	const requestSequenceRef = useRef(0)
	const debounceTimeoutRef = useRef<number | null>(null)
	
	const rightBounds = getRightBounds(price)
	
	const send = async (side: Side, amount: number) => {
		const sequence = ++requestSequenceRef.current
		setLoading(true)
		
		try {
			const response = await calc({
				pairId: 133,
				inAmount: side === 'left' ? amount : null,
				outAmount: side === 'right' ? amount : null,
			})
			
			if (sequence !== requestSequenceRef.current) return
			
			const nextPrice = parsePrice(response.price)
			const nextRightBounds = getRightBounds(nextPrice)
			
			setPrice(nextPrice)
			setLeftValue(clamp(response.inAmount, LEFT_MIN, LEFT_MAX))
			setRightValue(
				clamp(response.outAmount, nextRightBounds.min, nextRightBounds.max),
			)
		} finally {
			if (sequence === requestSequenceRef.current) {
				setLoading(false)
			}
		}
	}
	
	const schedule = (side: Side, amount: number) => {
		if (debounceTimeoutRef.current) {
			clearTimeout(debounceTimeoutRef.current)
		}
		debounceTimeoutRef.current = window.setTimeout(
			() => send(side, amount),
			DEBOUNCE_MS,
		)
	}
	
	useEffect(() => {
		setLeftInput(String(leftValue))
	}, [leftValue])
	
	useEffect(() => {
		setRightInput(String(rightValue))
	}, [rightValue])
	
	useEffect(() => {
		if (activeSide !== 'left') return
		if (leftInput === '' || leftInput === '.' || leftInput.endsWith('.')) return
		
		const numericValue = Number(leftInput)
		if (Number.isNaN(numericValue)) return
		
		const clampedValue = clamp(numericValue, LEFT_MIN, LEFT_MAX)
		setLeftValue(clampedValue)
		schedule('left', clampedValue)
	}, [leftInput])
	
	useEffect(() => {
		if (activeSide !== 'right') return
		if (rightInput === '' || rightInput === '.' || rightInput.endsWith('.')) return
		if (!price) return
		
		const numericValue = Number(rightInput)
		if (Number.isNaN(numericValue)) return
		
		const clampedValue = clamp(
			numericValue,
			rightBounds.min,
			rightBounds.max,
		)
		setRightValue(clampedValue)
		schedule('right', clampedValue)
	}, [rightInput])
	
	useEffect(() => {
		send('left', LEFT_MIN)
	}, [])
	
	return {
		leftInput,
		rightInput,
		setLeftInput,
		setRightInput,
		
		activeSide,
		setActiveSide,
		loading,
		
		leftConfig: {
			min: LEFT_MIN,
			max: LEFT_MAX,
			step: LEFT_STEP,
			onChange: (value: number) => {
				const clampedValue = clamp(value, LEFT_MIN, LEFT_MAX)
				setActiveSide('left')
				setLeftValue(clampedValue)
				schedule('left', clampedValue)
			},
		},
		
		rightConfig: {
			min: rightBounds.min,
			max: rightBounds.max,
			step: RIGHT_STEP,
			onChange: (value: number) => {
				if (!price) return
				const clampedValue = clamp(
					value,
					rightBounds.min,
					rightBounds.max,
				)
				setActiveSide('right')
				setRightValue(clampedValue)
				schedule('right', clampedValue)
			},
		},
	}
}
