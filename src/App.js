import React, { useContext, Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Context } from './Context'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

const Favorites = React.lazy(() => import('./pages/Favorites'))

export const App = () => {
	const { isAuth } = useContext(Context)

	return (
		<BrowserRouter>
			<Suspense fallback={<div />}>
				<Helmet>
					<meta
						name='description'
						content='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'
					/>
				</Helmet>
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
			</Suspense>
		</BrowserRouter>
	)
}
