import styled from 'styled-components'

export const Button = styled.button`
	display: block;
	width: 100%;
	height: 32px;
	color: #fff;
	text-align: center;
	font-size: 16px;
	border-radius: 3px;
	background-image: linear-gradient(
		to right,
		#b500b5,
		#ec008d,
		#ff1262,
		#ff5a39,
		#ff8c00
	);
	background-size: 200% auto;
	transition: 0.5s;
	cursor: pointer;

	&:hover {
		background-position: right center;
	}
	&[disabled] {
		opacity: 0.5;
		cursor: initial;
	}
`
