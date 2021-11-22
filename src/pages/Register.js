import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'

export const Register = () => {
	const { activateAuth } = useContext(Context)

	return (
		<>
			<UserForm onSubmit={activateAuth} title='Registrarse' />
			<UserForm onSubmit={activateAuth} title='Iniciar sesión' />
		</>
	)
}
