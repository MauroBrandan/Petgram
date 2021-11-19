import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { PhotoCard, PhotoCardSkeleton } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
	query getSinglePhoto($id: ID!) {
		photo(id: $id) {
			id
			categoryId
			src
			likes
			userId
			liked
		}
	}
`

export const PhotoCardWithQuery = ({ id }) => {
	const { loading, data, error } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })

	if (loading) return <PhotoCardSkeleton />

	if (error) return <h2>Internal Server Error</h2>

	const { photo = {} } = data
	return <PhotoCard {...photo} />
}
