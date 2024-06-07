import { Card } from '@nextui-org/react'

const Cards = ({
	color = 'bg-content2',
	width = 'w-full',
	height = 'h-[262px]',
	additionalClasses = '',
	radius = 'full',
	shadow = 'none',
	children,
}) => {
	return (
		<Card
			className={`flex flex-col justify-center items-center  ${width} ${height} ${color} ${additionalClasses}`}
			radius={radius}
			shadow={shadow}
		>
			{children}
		</Card>
	)
}

export default Cards
