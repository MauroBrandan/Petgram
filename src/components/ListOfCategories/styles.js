import styled, {css} from 'styled-components'
import { bounceDown } from '../../styles/animations'

export const List = styled.ul`
	display: flex;
	overflow: scroll;
	width: 100%;
	margin: 40px 0;
	&::-webkit-scrollbar {
		display: none;
	}
	${props => props.fixed && css`
		position: fixed;
		top: -20px;
		left: 0;
		right: 0;
		max-width: 400px;
		margin: 0 auto;
		padding: 5px;
		background-color: #fff;
		border-radius: 60px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
		transform: scale(0.7);
		z-index: 1;
		${bounceDown()}
	`}
`

export const Item = styled.li`
	padding: 0 8px;
`
