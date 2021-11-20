import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animations'

export const Nav = styled.nav`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	max-width: 500px;
	height: 50px;
	margin: 0 auto;
	background: #fcfcfc;
	border-top: 1px solid #e0e0e0;
	z-index: 1;
`

export const Link = styled(LinkRouter)`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	color: #888;
	text-decoration: none;

	&[aria-current] {
		color: #000;

		&:after {
			content: '·';
			position: absolute;
			bottom: 0;
			font-size: 34px;
			line-height: 20px;
			${fadeIn({ time: '0.5s' })};
		}
	}
`
