import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { ThemeProvider } from 'next-themes'
import Layout from './components/Layout'
import NavBar from './components/Navbar'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
	title: 'FastPay App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={poppins.className}>
				<Providers>
					<ThemeProvider>
						<NavBar />
						<Layout>{children}</Layout>
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	)
}