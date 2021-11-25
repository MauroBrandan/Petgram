import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Context } from '../Context'
import { useGetFavorites } from '../hooks/useGetFavorites'
import { ListOfFavs, ListOfFavsSkeleton } from '../components/ListOfFavs'

export default () => {
	const { data, loading, error } = useGetFavorites()
	const { removeAuth } = useContext(Context)

	if (loading) return <ListOfFavsSkeleton />

	if (error) return removeAuth()

	const { favs } = data

	return (
		<>
			<Helmet>
				<title>Petgram | Tus Favoritos 😻</title>
			</Helmet>
			<ListOfFavs favs={favs} />
		</>
	)
}
