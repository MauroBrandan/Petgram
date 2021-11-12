import React from 'react'
import { GlobalStyles } from './GlobalStyles'

import { ListOfCategories } from './components/ListOfCategories'

export const App = () => (
	<>
		<GlobalStyles />
		<h1>Petgram</h1>
		<ListOfCategories />
	</>
)
