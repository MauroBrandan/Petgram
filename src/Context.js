import React, { createContext, useState } from 'react'
import { useApolloClient } from '@apollo/client'

export const Context = createContext()

export function Provider({ children }) {
	const [isAuth, setIsAuth] = useState(() => {
		return window.sessionStorage.getItem('token')
	})
	const client = useApolloClient()

	const value = {
		isAuth,
		activateAuth: (token) => {
			setIsAuth(true)
			window.sessionStorage.setItem('token', token)
		},
		removeAuth: () => {
			setIsAuth(false)
			window.sessionStorage.removeItem('token')
			client.resetStore()
		}
	}

	return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
