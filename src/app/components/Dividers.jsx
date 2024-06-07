import React from 'react'
import { Divider } from '@nextui-org/react'

export default function Dividers() {
	return (
		<div className='max-w-md'>
			<div className='flex items-center justify-center h-5 space-x-4 text-small'>
				<Divider orientation='horizontal' className='h-[1px] w-36 bg-foreground-50' />
				<div>O</div>
				<Divider orientation='horizontal' className='h-[1px] w-36 bg-foreground-50' />
			</div>
		</div>
	)
}
