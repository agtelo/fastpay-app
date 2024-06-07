'use client'
import React from 'react'
import { Select, SelectItem } from '@nextui-org/select'

export default function TicketFilter() {
	const states = [
		{ key: 'pausado', label: 'Pausado' },
		{ key: 'pendiente', label: 'Pendiente' },
		{ key: 'pagado', label: 'Pagado' },
		,
	]
	return (
		<div className='flex flex-wrap gap-4 md:flex-nowrap'>
			<Select
				label='Filtro'
				className='w-32 text-center'
				radius='full'
				size='sm'
				labelPlacement='inside'
			>
				{states.map(state => (
					<SelectItem key={state.key}>{state.label}</SelectItem>
				))}
			</Select>
		</div>
	)
}
