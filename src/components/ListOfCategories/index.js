import React, { useState, useEffect } from 'react'
import { List, Item } from './styles'

import { Category } from '../Category/'

export const ListOfCategories = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		window.fetch('https://petgram-api-mb.vercel.app/categories')
			.then((res) => res.json())
			.then((data) => {
				setCategories(data)
			})
	}, [])

	return (
		<List>
			{categories.map((category) => (
				<Item key={category.id}>
					<Category {...category} />
				</Item>
			))}
		</List>
	)
}