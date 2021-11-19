import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search)
	const detailId = urlParams.get('detail')

	// prettier-ignore
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Logo />
			{detailId
				? <PhotoCardWithQuery id={detailId} />
				: 
					<Routes>
						
						<Route path='/' element={<Home />} />
						<Route path="/pet/:categoryId" element={ <Home />}/>
					</Routes>
				}
		</BrowserRouter>
	)
}
