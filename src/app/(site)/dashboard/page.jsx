import React from 'react'
import EmptyDashboard from '@/app/components/EmptyDashboard'
import Submenu from '@/app/components/Submenu'
import TicketCard from '@/app/components/TicketCard'
export default function Dashboard() {
	return (
		<>
			<section className='space-y-10'>
				<Submenu />
				{/* <EmptyDashboard /> */}
				<TicketCard />
			</section>
		</>
	)
}
