import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/index'

export const Home = () => {
	let params = useParams()

	return (
		<>
			<ListOfCategories />
			<ListOfPhotoCards categoryId={params.categoryId} />
		</>
	)
}
