'use client'
import React, { useState } from 'react'
import { Input } from '@nextui-org/react'
import { EyeFilledIcon } from '../EyeFilledIcon'
import { EyeSlashFilledIcon } from '../EyeSlashFilledIcon'

export default function InputPassword() {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => setIsVisible(!isVisible)

	return (
		<Input
			size='lg'
			radius='sm'
			label='Contraseña'
			placeholder='*********'
			labelPlacement='outside'
			endContent={
				<button className='focus:outline-none' type='button' onClick={toggleVisibility}>
					{isVisible ? (
						<EyeSlashFilledIcon className='text-2xl pointer-events-none text-default-400' />
					) : (
						<EyeFilledIcon className='text-2xl pointer-events-none text-default-400' />
					)}
				</button>
			}
			type={isVisible ? 'text' : 'password'}
			className=''
		/>
	)
}
