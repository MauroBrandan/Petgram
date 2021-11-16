import React from 'react'
import { Anchor, Image, SkeletonWrapper, SkeletonImage, SkeletonTitle } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
	<Anchor href={path}>
		<Image src={cover} />
		{emoji}
	</Anchor>
)

export const CategorySkeleton = () => (
	<SkeletonWrapper>
		<SkeletonImage />
		<SkeletonTitle />
	</SkeletonWrapper>
)
