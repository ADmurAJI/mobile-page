import { mockCalc } from './mockCalc'
import { CalcRequest, CalcResponse } from './types'

const USE_MOCK = true
const URL = '/b2api/change/user/pair/calc'

async function realCalc(
	payload: CalcRequest,
	signal?: AbortSignal
): Promise<CalcResponse> {
	const res = await fetch(URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
		signal,
	})
	
	if (!res.ok) {
		throw new Error(await res.text())
	}
	
	return res.json()
}

export function calc(
	payload: CalcRequest,
	signal?: AbortSignal
): Promise<CalcResponse> {
	return USE_MOCK
		? mockCalc(payload)
		: realCalc(payload, signal)
}
