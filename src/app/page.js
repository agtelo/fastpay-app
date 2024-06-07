import NavBar from './components/Navbar'
import Card from './components/Cards/Cards'
import Buttons from './components/Buttons/Buttons'
import Image from 'next/image'
import landingImage from './assets/landing-page.png'

export default function Home() {
	return (
		<main>
			<section className='mt-12 text-start'>
				<h1 className='text-4xl font-medium text-foreground'>
					Envía tickets y recibe pagos con PayPal
				</h1>
				<p className='my-4 text-sm antialiased font-normal tracking-wide text-foreground-200'>
					FastPay es una plataforma que permite enviar tickets a tus contactos mediante correo
					electrónico y recibir pagos a través de PayPal de manera sencilla y eficiente.
				</p>
				<Buttons
					color='foregorund'
					text='Comienza a recibir pagos'
					route='/login'
					additionalClasses='border border-foreground-100 font-medium'
				/>
				<Card additionalClasses='mt-12'>
					<Image src={landingImage} alt='Preview image' className='w-48 mt-8' priority />
				</Card>
			</section>
		</main>
	)
}
