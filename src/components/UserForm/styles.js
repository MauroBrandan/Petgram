import styled from 'styled-components'

export const Title = styled.h2`
	padding: 8px 0;
	font-size: 24px;
	font-weight: 500;
`

export const Form = styled.form`
	padding: 16px 0;
`

export const Input = styled.input`
	display: block;
	width: 100%;
	padding: 8px 4px;
	margin-bottom: 8px;
	border: 1px solid #ccc;
	border-radius: 3px;
	font-family: -apple-system, 'Segoe UI';
	font-size: 16px;
`

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
`
