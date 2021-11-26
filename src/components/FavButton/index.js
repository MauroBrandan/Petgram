import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({ liked, likes, onClick }) => {
	const Icon = liked ? MdFavorite : MdFavoriteBorder
	const color = liked ? '#ff275a' : ''

	return (
		<Button onClick={onClick}>
			<Icon size='32px' color={color} />
			{likes} likes
		</Button>
	)
}

FavButton.propTypes = {
	liked: PropTypes.bool.isRequired,
	likes: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
}
