import React from 'react'
import { GlobalStyles } from './GlobalStyles'

import { Category } from './components/Category'

export const App = () => (
	<>
		<GlobalStyles />
		<h1>Hola Petgram</h1>
		<Category />
	</>
)
