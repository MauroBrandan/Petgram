import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search)
	const detailId = urlParams.get('detail')

	return (
		<>
			<GlobalStyles />
			<Logo />
			{detailId ? (
				<PhotoCardWithQuery id={detailId} />
			) : (
				<>
					<ListOfCategories />
					<ListOfPhotoCards />
				</>
			)}
		</>
	)
}
