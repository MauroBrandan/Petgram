import React from 'react'
import { useParams } from 'react-router'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export const Detail = () => {
	let params = useParams()

	return <PhotoCardWithQuery id={params.detailId} />
}
