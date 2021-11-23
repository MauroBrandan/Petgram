import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegister } from '../hooks/useRegister'
import { useLogin } from '../hooks/useLogin'

export const NotRegisteredUser = () => {
	const { activateAuth } = useContext(Context)
	const { register, loading, error } = useRegister()
	const { login, loading: loadingLogin, error: errorLogin } = useLogin()

	const onSubmit = ({ email, password }, title) => {
		const input = { email, password }
		const variables = { input }

		if (title === 'Registrarse') {
			register({ variables })
				.then(({ data }) => {
					const { signup } = data
					activateAuth(signup)
				})
				.catch((error) => {
					console.log(error.graphQLErrors[0].message)
				})
		}

		if (title === 'Iniciar sesión') {
			login({ variables })
				.then(({ data }) => {
					const { login } = data
					activateAuth(login)
				})
				.catch((error) => {
					console.log(error.graphQLErrors[0].message)
				})
		}
	}

	const errorMsg = error && 'El usuario ya existe o hay algún problema'
	const errorMsgLogin = errorLogin && 'El usuario no existe o la contraseña es incorrecta'

	return (
		<>
			<UserForm
				onSubmit={onSubmit}
				title='Registrarse'
				loading={loading}
				error={errorMsg}
			/>
			<UserForm
				onSubmit={onSubmit}
				title='Iniciar sesión'
				loading={loadingLogin}
				error={errorMsgLogin}
			/>
		</>
	)
}
