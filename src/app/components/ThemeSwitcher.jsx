'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Switch } from '@nextui-org/react'
import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'

export function ThemeSwitcher() {
	const [isSelected, setIsSelected] = useState(false)
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		if (mounted) {
			setTheme(isSelected ? 'dark' : 'light')
		}
	}, [mounted, isSelected, setTheme])

	if (!mounted) return null

	return (
		<Switch
			isSelected={isSelected}
			onValueChange={setIsSelected}
			color='default'
			thumbIcon={({ isSelected, className }) =>
				isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
			}
		/>
	)
}
