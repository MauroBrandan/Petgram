import React from 'react'
import { Title, Form, Input, Button } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title, loading, error }) => {
	const email = useInputValue('')
	const password = useInputValue('')

	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit({ email: email.value, password: password.value })
	}

	return (
		<>
			<Form onSubmit={handleSubmit} disabled={loading}>
				<Title>{title}</Title>
				<Input disabled={loading} placeholder='Email' type='email' {...email} />
				<Input disabled={loading} placeholder='Password' type='password' {...password} />
				<Button disabled={loading} type='submit'>{title}</Button>
			</Form>
			{error && <span>{error}</span>}
		</>
	)
}
