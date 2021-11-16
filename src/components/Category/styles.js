import styled from 'styled-components'
import { skeletonLoading } from '../../styles/animations'

export const Anchor = styled.a`
	display: flex;
	flex-direction: column;
	text-align: center;
	text-decoration: none;
	width: 75px;
`

export const Image = styled.img`
	border: 1px solid #ddd;
	box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
	border-radius: 50%;
	height: auto;
	overflow: hidden;
	object-fit: cover;
	height: 75px;
	width: 75px;
	margin-bottom: 8px;
`
export const SkeletonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const SkeletonImage = styled.div`
	width: 75px;
	height: 75px;
	border-radius: 50%;
	${skeletonLoading()}
`

export const SkeletonTitle = styled.p`
	width: 26px;
	height: 15px;
	margin-top: 8px;
	${skeletonLoading()}
`
