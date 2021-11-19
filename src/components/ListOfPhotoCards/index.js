import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { PhotoCard, PhotoCardSkeleton } from '../PhotoCard'

const GET_PHOTOS = gql`
	query getPhotos($categoryId: ID) {
		photos(categoryId: $categoryId) {
			id
			categoryId
			src
			likes
			userId
			liked
		}
	}
`
export const ListOfPhotoCards = ({ categoryId }) => {
	const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })

	if (loading) {
		return (
			<ul>
				{[1, 2, 3].map((id) => (
					<PhotoCardSkeleton key={id} />
				))}
			</ul>
		)
	}
	
	if (error) return <h2>Internal Server Error</h2>

	return (
		<ul>
			{data.photos.map((photo) => (
				<PhotoCard key={photo.id} {...photo} />
			))}
		</ul>
	)
}
