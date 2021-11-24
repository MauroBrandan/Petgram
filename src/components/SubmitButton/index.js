import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ onClick, disabled, children }) => (
	<Button onClick={onClick} disabled={disabled}>
		{children}
	</Button>
)
