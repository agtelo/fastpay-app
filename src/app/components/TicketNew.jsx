'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { AddButton } from './AddButton'

export default function Buttons({
	color = 'default',
	width = 'w-full',
	height = 'h-12',
	route,
	additionalClasses,
	variant,
	radius = 'full',
}) {
	const router = useRouter()

	return (
		<div className=''>
			<Button
				className={` ${width} ${height} ${additionalClasses}`}
				variant={variant}
				color={color}
				radius={radius}
				onClick={() => router.push(route)}
				startContent={<AddButton />}
			>
				Nuevo
			</Button>
		</div>
	)
}
