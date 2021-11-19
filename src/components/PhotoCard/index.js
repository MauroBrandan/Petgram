import React from 'react'
import { Article, ImgWrapper, Img, Button, ImgSkeleton, ButtonSkeleton } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const key = `like-${id}`
	const [liked, setLiked] = useLocalStorage(key, false)
	const [show, card] = useNearScreen()

	const Icon = liked ? MdFavorite : MdFavoriteBorder
	const color = liked ? '#ff275a' : ''

	return (
		<Article ref={card}>
			{show && (
				<>
					<a href={`/?detail=${id}`}>
						<ImgWrapper>
							<Img src={src} />
						</ImgWrapper>
					</a>

					<Button onClick={() => setLiked(!liked)}>
						<Icon size='32px' color={color} />
						{likes} likes
					</Button>
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
