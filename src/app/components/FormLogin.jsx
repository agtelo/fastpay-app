import React from 'react'
import CredentialsButton from '@/app/components/Buttons/CredentialsButton'
import GooggleButton from '@/app/components/Buttons/GoogleButton'
import Inputs from '@/app/components/Inputs/Inputs'
import InputPassword from '@/app/components/Inputs/InputPassword'
import Dividers from '@/app/components/Dividers'

export default function FormLogin() {
	return (
		<>
			<section className='mt-10 space-y-5'>
				{' '}
				<GooggleButton
					color='foreground'
					variant='ghost'
					text='Inicia sesión con Google'
					additionalClasses='font-medium'
				/>
				<Dividers />
			</section>
			<form className='mt-10 space-y-5'>
				<Inputs />
				<br />
				<InputPassword />
				<h1 className='text-end'>¿Olvidaste tu contraseña?</h1>
				<CredentialsButton
					text='Inicia sesión'
					route='/dashboard'
					radius='full'
					variant='solid'
					additionalClasses='font-medium'
				/>
				<h1 className='text-center'>¿Aún no tienes cuenta? Crear una cuenta</h1>
			</form>
		</>
	)
}
