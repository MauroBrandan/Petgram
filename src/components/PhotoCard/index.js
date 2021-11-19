import React from 'react'
import { Article, ImgWrapper, Img, ImgSkeleton, ButtonSkeleton } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLikePhoto } from '../../hooks/useLikePhoto'
import { FavButton } from '../FavButton'

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const key = `like-${id}`
	const [liked, setLiked] = useLocalStorage(key, false)
	const [show, card] = useNearScreen()
	const [toggleLike] = useLikePhoto()

	const handleFavClick = () => {
		!liked && toggleLike({ variables: { input: { id: id } } })
		setLiked(!liked)
	}

	return (
		<Article ref={card}>
			{show && (
				<>
					<a href={`/?detail=${id}`}>
						<ImgWrapper>
							<Img src={src} />
						</ImgWrapper>
					</a>

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
