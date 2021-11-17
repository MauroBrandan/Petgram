import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Article = styled.article`
	min-height: 200px;
	margin-bottom: 32px;
`

export const ImgWrapper = styled.div`
	display: block;
	height: 0;
	overflow: hidden;
	padding: 56.25% 0 0 0;
	position: relative;
	width: 100%;
`

export const Img = styled.img`
	${fadeIn()}
	box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
`

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
