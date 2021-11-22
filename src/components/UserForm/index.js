import React from 'react'
import { Title, Form, Input, Button } from './styles'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title }) => {
	const email = useInputValue('')
	const password = useInputValue('')

	return (
		<>
			<Form onSubmit={onSubmit}>
				<Title>{title}</Title>
				<Input placeholder='Email' type='email' {...email} />
				<Input placeholder='Password' type='password' {...password} />
				<Button type='submit'>{title}</Button>
			</Form>
		</>
	)
}
