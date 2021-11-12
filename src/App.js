import React from 'react'
import { GlobalStyles } from './GlobalStyles'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => (
	<>
		<GlobalStyles />
		<h1>Petgram</h1>
		<ListOfCategories />
		<ListOfPhotoCards />
	</>
)
