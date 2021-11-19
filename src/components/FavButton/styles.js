import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Button = styled.button`
	display: flex;
	align-items: center;
	padding-top: 8px;
	cursor: pointer;
	& svg {
		margin-right: 4px;
		${fadeIn({ time: '250ms', type: 'ease-in' })}
	}
`
