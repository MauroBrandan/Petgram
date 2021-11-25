import React from 'react'
import { useParams } from 'react-router'
import { Helmet } from 'react-helmet'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export const Detail = () => {
	let params = useParams()

	return (
		<>
			<Helmet>
				<title>Petgram | Fotografía {params.detailId}</title>
			</Helmet>
			<PhotoCardWithQuery id={params.detailId} />
		</>
	)
}
