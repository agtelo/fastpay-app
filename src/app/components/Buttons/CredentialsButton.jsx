'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function CredentialsButton({
	color = 'default',
	width = 'w-full',
	height = 'h-12',
	text,
	route,
	additionalClasses,
	variant,
	radius = 'full',
}) {
	const router = useRouter()

	return (
		<div className='flex flex-wrap items-center gap-4'>
			<Button
				className={` ${width} ${height} ${additionalClasses}`}
				variant={variant}
				color={color}
				radius={radius}
				onClick={() => router.push(route)}
			>
				{text}
			</Button>
		</div>
	)
}
