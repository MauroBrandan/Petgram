import React, { useState, useEffect, useRef } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const [show, setShow] = useState(false)
	const key = `like-${id}`
	const [liked, setLiked] = useState(() => {
		try {
			const like = window.localStorage.getItem(key)
			return JSON.parse(like)
		} catch (e) {
			console.error(e)
			return false
		}
	})
	const card = useRef(null)

	useEffect(() => {
		Promise.resolve(
			typeof window.IntersectionObserver != 'undefined'
				? window.IntersectionObserver
				: import('intersection-observer')
		).then(() => {
			const observer = new window.IntersectionObserver((entries) => {
				const { isIntersecting } = entries[0]
				if (isIntersecting) {
					setShow(true)
					observer.disconnect()
				}
			})

			observer.observe(card.current)
		})
	}, [card])

	const Icon = liked ? MdFavorite : MdFavoriteBorder
	const color = liked ? '#ff275a' : ''

	const setLocalStorage = (value) => {
		try {
			window.localStorage.setItem(key, value)
			setLiked(value)
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<Article ref={card}>
			{show && (
				<>
					<a href={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} />
						</ImgWrapper>
					</a>

					<Button onClick={() => setLocalStorage(!liked)}>
						<Icon size='32px' color={color} />
						{likes} likes
					</Button>
				</>
			)}
		</Article>
	)
}
