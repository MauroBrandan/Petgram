import React, { useContext } from 'react'
import { Context } from '../Context'
import { useGetFavorites } from '../hooks/useGetFavorites'
import { ListOfFavs, ListOfFavsSkeleton } from '../components/ListOfFavs'

export const Favorites = () => {
	const { data, loading, error } = useGetFavorites()
	const { removeAuth } = useContext(Context)

	if (loading) return <ListOfFavsSkeleton />

	if (error) return removeAuth()

	const { favs } = data

	return <ListOfFavs favs={favs} />
}
