import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/index'

const HomePage = () => {
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

export const Home = React.memo(HomePage)
