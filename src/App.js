import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

export const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Logo />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pet/:categoryId' element={<Home />} />
				<Route path='/detail/:detailId' element={<Detail />} />
			</Routes>
			<NavBar />
		</BrowserRouter>
	)
}
