import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Article, ImgWrapper, Img, ImgSkeleton, ButtonSkeleton } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLikePhoto } from '../../hooks/useLikePhoto'
import { FavButton } from '../FavButton'

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
	const [show, card] = useNearScreen()
	const [toggleLike] = useLikePhoto()

	const handleFavClick = () => {
		toggleLike({ variables: { input: { id: id } } })
	}

	return (
		<Article ref={card}>
			{show && (
				<>
					<Link to={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} />
						</ImgWrapper>
					</Link>

					<FavButton liked={liked} likes={likes} onClick={handleFavClick} />
				</>
			)}
		</Article>
	)
}

export const PhotoCardSkeleton = () => (
	<Article>
		<ImgSkeleton />
		<ButtonSkeleton />
	</Article>
)

PhotoCard.propTypes = {
	id: PropTypes.string.isRequired,
	liked: PropTypes.bool.isRequired,
	src: PropTypes.string.isRequired,
	likes: function (props, propName, componentName) {
		const propValue = props[propName]

		if (propValue === undefined) {
			return new Error(`${propName} Value must be defined`)
		}

		if (propValue < 0) {
			return new Error(`${propName} Value must be greater than 0`)
		}
	},
}
