import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Context } from './Context'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favorites } from './pages/Favorites'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

export const App = () => {
	const { isAuth } = useContext(Context)

	return (
		<BrowserRouter>
			<GlobalStyles />
			<Logo />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pet/:categoryId' element={<Home />} />
				<Route path='/detail/:detailId' element={<Detail />} />
				<Route path='/favs' element={isAuth ? <Favorites /> : <Navigate to='/login' />}/>
				<Route path='/user' element={isAuth ? <User /> : <Navigate to='/login' />} />
				<Route path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate to='/' />} />
				<Route path='*' element={<NotFound />}/>
			</Routes>
			<NavBar />
		</BrowserRouter>
	)
}
