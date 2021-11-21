import React, { useContext } from 'react'
import { Context } from '../Context'

export const Register = () => {
	const { activateAuth } = useContext(Context)

	return (
		<div>
			<h1>Not Registered User</h1>
			<form onSubmit={activateAuth}>
				<button>Iniciar Sesion</button>
			</form>
		</div>
	)
}
