import React from 'react'
import { List, Item } from './styles'

import { Category } from '../Category/'

import { categories } from '../../../api/db.json'

export const ListOfCategories = () => (
	<List>
		{categories.map((category) => (
			<Item key={category.id}>
				<Category {...category} />
			</Item>
		))}
	</List>
)
