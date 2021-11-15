import React, { useState, useEffect } from 'react'
import { List, Item } from './styles'

import { Category } from '../Category/'

export const ListOfCategories = () => {
	const [categories, setCategories] = useState([])
	const [showFixed, setShowFixed] = useState(false)

	useEffect(() => {
		window.fetch('https://petgram-api-mb.vercel.app/categories')
			.then((res) => res.json())
			.then((data) => {
				setCategories(data)
			})
	}, [])

	useEffect(() => {
		const onScroll = (e) => {
			const newShowFixed = window.scrollY > 200
			showFixed != newShowFixed && setShowFixed(newShowFixed)
		}

		document.addEventListener('scroll', onScroll)

		return () => {
			document.removeEventListener('scroll', onScroll)
		}
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

	return (
		<>
			{renderList()}
			{showFixed && renderList(true)}
		</>
	)
}
