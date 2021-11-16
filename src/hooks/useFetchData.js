import React, { useState, useEffect } from 'react'

export function useFetchData(url = '', initialState) {
	const [data, setData] = useState(initialState)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		window.fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			})
	}, [])

	return [data, loading]
}
