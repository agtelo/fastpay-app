import React from 'react'
import { EmptyDashboardImage } from './EmptyDashboardImage'

export default function EmptyDashboard() {
	return (
		<>
			<div className='flex flex-col items-center mt-24 space-y-6'>
				<EmptyDashboardImage />
				<p className='text-xl font-semibold leading-8'>Parece que no hay nada</p>
				<p className='w-full px-12 text-sm leading-4 text-center font-base text-foreground-200'>
					Cree un nuevo ticket haciendo click en el botón Nuevo y empiece a recibir pagos.
				</p>
			</div>
		</>
	)
}
