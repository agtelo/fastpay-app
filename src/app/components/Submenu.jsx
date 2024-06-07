import TicketCounter from './TicketCounter'
import TicketFilter from './TicketFilter'
import TicketNew from './TicketNew'
export default function Submenu() {
	return (
		<>
			<div className='flex items-center justify-between'>
				<TicketCounter />
				<TicketFilter />
				<TicketNew route={'/ticket'} />
			</div>
		</>
	)
}
