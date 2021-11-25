import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/index'

export const Home = () => {
	let params = useParams()

	return (
		<>
			<Helmet>
				<title>Petgram | Tu app de fotos de mascotas</title>
			</Helmet>
			<ListOfCategories />
			<ListOfPhotoCards categoryId={params.categoryId} />
		</>
	)
}
