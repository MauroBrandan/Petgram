import React from 'react'
import { Title, Form, Input } from './styles'
import { useInputValue } from '../../hooks/useInputValue'
import {SubmitButton} from '../SubmitButton/index'

export const UserForm = ({ onSubmit, title, loading, error }) => {
	const email = useInputValue('')
	const password = useInputValue('')

	const handleSubmit = (event) => {
		event.preventDefault()
		onSubmit({ email: email.value, password: password.value }, title)
	}

	return (
		<>
			<Form onSubmit={handleSubmit} disabled={loading}>
				<Title>{title}</Title>
				<Input disabled={loading} placeholder='Email' type='email' {...email} />
				<Input disabled={loading} placeholder='Password' type='password' {...password} />
				<SubmitButton disabled={loading} type='submit'>{title}</SubmitButton>
			</Form>
			{error && <span>{error}</span>}
		</>
	)
}
