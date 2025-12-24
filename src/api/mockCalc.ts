import { CalcRequest, CalcResponse } from './types'

const PRICE_STRAIGHT = 96.47
const PRICE_REVERSE = 0.01035

const delay = (ms: number) =>
	new Promise((r) => setTimeout(r, ms))

export async function mockCalc(
	payload: CalcRequest
): Promise<CalcResponse> {
	await delay(200)
	
	if (payload.inAmount != null) {
		const inAmount = payload.inAmount
		return {
			inAmount,
			outAmount: Number((inAmount * PRICE_REVERSE).toFixed(6)),
			isStraight: true,
			price: [String(PRICE_STRAIGHT), String(PRICE_REVERSE)],
		}
	}
	
	if (payload.outAmount != null) {
		const outAmount = payload.outAmount
		return {
			inAmount: Number((outAmount * PRICE_STRAIGHT).toFixed(2)),
			outAmount,
			isStraight: false,
			price: [String(PRICE_STRAIGHT), String(PRICE_REVERSE)],
		}
	}
	
	throw new Error('Invalid payload')
}
