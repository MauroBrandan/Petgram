import React from 'react'
import { useGetFavorites } from '../hooks/useGetFavorites'
import { ListOfFavs, ListOfFavsSkeleton } from '../components/ListOfFavs'

export const Favorites = () => {
	const { data, loading, error } = useGetFavorites()

	if (loading) return <ListOfFavsSkeleton />

	if (error) return <h2>Internal Server Error</h2>

	const { favs } = data

	return <ListOfFavs favs={favs} />
}
