import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
	const { removeAuth } = useContext(Context)

	return (
		<>
			<Helmet>
				<title>Petgram | Tu Usuario 😺</title>
			</Helmet>
			<h1>User</h1>
			<SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
		</>
	)
}
