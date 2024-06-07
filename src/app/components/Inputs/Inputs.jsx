import React from 'react'
import { Input } from '@nextui-org/react'

export default function Inputs({ text, type, placeholder }) {
	return (
		<div className='flex flex-wrap w-full gap-4 md:flex-nowrap'>
			<Input
				radius='sm'
				size='lg'
				type='email'
				label='Correo electrónico'
				labelPlacement='outside'
				placeholder='correo@mail.com'
			/>
		</div>
	)
}
