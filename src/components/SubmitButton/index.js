import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'

export const SubmitButton = ({ onClick, disabled, children }) => (
	<Button onClick={onClick} disabled={disabled}>
		{children}
	</Button>
)

SubmitButton.propTypes = {
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
}
