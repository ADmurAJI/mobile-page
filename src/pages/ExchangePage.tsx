import { Box } from '@mui/material'

import { AmountSection } from '../components/amount/AmountSection'
import { SliderRow } from '../components/amount/SliderRow'
import { BankCard } from '../components/BankCard'
import { RequisitesSection } from '../components/requisites/RequisitesSection'
import { SegmentedTabs } from '../components/SegmentedTabs'

import { AMOUNT_ITEMS } from './mock'

export function ExchangePage() {
	return (
		<Box>
			<SegmentedTabs />
			<BankCard />
			<AmountSection items={AMOUNT_ITEMS} />
			<SliderRow />
			<RequisitesSection />
		</Box>
	)}