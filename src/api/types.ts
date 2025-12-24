export type CalcRequest = {
	pairId: 133
	inAmount: number | null
	outAmount: number | null
}

export type CalcResponse = {
	inAmount: number
	outAmount: number
	isStraight: boolean
	price: [string, string]
}
