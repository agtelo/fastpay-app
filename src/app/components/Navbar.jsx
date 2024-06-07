'use client'
import React from 'react'
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
} from '@nextui-org/react'
import { Logo } from './Logo'
import { ThemeSwitcher } from './ThemeSwitcher'

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	const menuItems = [
		'Profile',
		'Dashboard',
		'Activity',
		'Analytics',
		'System',
		'Deployments',
		'My Settings',
		'Team Settings',
		'Help & Feedback',
		'Log Out',
	]

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} height={'96px'} isBlurred='false'>
			<NavbarContent>
				<NavbarBrand>
					<Logo />
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem>
					<ThemeSwitcher />
				</NavbarItem>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden'
				/>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'
							}
							className='w-full'
							href='#'
							size='lg'
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
}
