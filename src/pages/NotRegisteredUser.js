import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegister } from '../hooks/useRegister'

export const NotRegisteredUser = () => {
	const { activateAuth } = useContext(Context)
	const { register, loading, error } = useRegister()

	const onSubmit = ({ email, password }) => {
		const input = { email, password }
		const variables = { input }

		register({ variables })
			.then(activateAuth)
			.catch((error) => {
				console.log(error.graphQLErrors[0].message)
			})
	}

	const errorMsg = error && 'El usuario ya existe o hay algún problema'

	return (
		<>
			<UserForm
				onSubmit={onSubmit}
				title='Registrarse'
				loading={loading}
				error={errorMsg}
			/>
			<UserForm onSubmit={activateAuth} title='Iniciar sesión' />
		</>
	)
}
