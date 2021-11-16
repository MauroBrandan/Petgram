import React, { useState, useEffect, useRef } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE =
	'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const [show, setShow] = useState(false)
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

	return (
		<Article ref={card}>
			{show && (
				<>
					<a href={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} />
						</ImgWrapper>
					</a>

					<Button>
						<MdFavoriteBorder size='32px' />
						{likes} likes
					</Button>
				</>
			)}
		</Article>
	)
}
