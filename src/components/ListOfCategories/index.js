import React, { useState, useEffect } from 'react'
import { List, Item } from './styles'

import { Category, CategorySkeleton } from '../Category/'
import { useFetchData } from '../../hooks/useFetchData'

export const ListOfCategories = () => {
	const [categories, loading] = useFetchData('https://petgram-api-mb.vercel.app/categories', [])
	const [showFixed, setShowFixed] = useState(false)

	useEffect(() => {
		const onScroll = (e) => {
			const newShowFixed = window.scrollY > 200
			showFixed != newShowFixed && setShowFixed(newShowFixed)
		}

		document.addEventListener('scroll', onScroll)

		return () => document.removeEventListener('scroll', onScroll)
	}, [showFixed])

	const renderList = (fixed) => (
		<List fixed={fixed}>
			{categories.map((category) => (
				<Item key={category.id}>
					<Category {...category} />
				</Item>
			))}
		</List>
	)

	if (loading) {
		return (
			<>
				<List>
					{[1, 2, 3, 4, 5].map((category) => (
						<Item key={category}>
							<CategorySkeleton />
						</Item>
					))}
				</List>
			</>
		)
	}

	return (
		<>
			{renderList()}
			{showFixed && renderList(true)}
		</>
	)
}
