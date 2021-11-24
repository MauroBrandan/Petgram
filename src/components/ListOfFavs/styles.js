import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { skeletonLoading } from '../../styles/animations'

export const Grid = styled.div`
	padding-top: 32px;
`

export const Link = styled(LinkRouter)`
	position: relative;
	display: inline-block;
	width: 31.33%;
	margin: 1%;
	overflow: hidden;
	border-radius: 8px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	&::after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
`
export const Image = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

export const ImageSkeleton = styled.div`
	display: inline-block;
	width: 31.33%;
	margin: 1%;
	border-radius: 8px;
	${skeletonLoading}
	&::after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
`
