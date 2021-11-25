import React from 'react'
import { Helmet } from 'react-helmet'

export const NotFound = () => {
	return (
		<>
			<Helmet>
				<title>Petgram | 404 😿</title>
			</Helmet>
			<div style={{ textAlign: 'center', width: '90%', margin: '50% auto' }}>
				<h2>Lo siento, no encontramos lo que buscabas</h2>
				<p style={{ fontSize: '32px' }}>😿</p>
			</div>
		</>
	)
}
