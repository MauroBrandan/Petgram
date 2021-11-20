import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'
import { skeletonLoading } from '../../styles/animations'

export const Article = styled.article`
	min-height: 200px;
	margin: 32px 0;
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

export const ImgSkeleton = styled.div`
	width: 100%;
	height: 280px;
	${skeletonLoading()}
`

export const ButtonSkeleton = styled.div`
	width: 55px;
	height: 30px;
	margin: 12px 12px;
	${skeletonLoading()}
`
