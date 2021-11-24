import React from 'react'
import { Grid, Link, Image, ImageSkeleton } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
	return (
		<Grid>
			{favs.map((fav) => (
				<Link key={fav.id} to={`/detail/${fav.id}`}>
					<Image src={fav.src} />
				</Link>
			))}
		</Grid>
	)
}

export const ListOfFavsSkeleton = () => (
	<Grid>
		{[1, 2, 3, 4, 5, 6].map((id) => (
			<ImageSkeleton key={id} />
		))}
	</Grid>
)
